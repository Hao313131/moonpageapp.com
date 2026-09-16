/**
 * MoonPage — review submission endpoint (Google Apps Script web app).
 *
 * WHAT THIS IS
 * A free, account-owned replacement for a form backend. Deploy it once and the
 * site's review form POSTs straight into a Google Sheet you control. No
 * third-party relay, no server, no monthly cost.
 *
 * WHY IT IS WRITTEN THIS WAY
 * Apps Script web apps cannot answer a CORS preflight request, so a browser
 * `fetch` with `Content-Type: application/json` fails against them. The site
 * therefore posts with `text/plain` (a "simple" content type, which needs no
 * preflight) and this script parses the raw body as JSON itself. Do not "fix"
 * the client to send application/json — it will break.
 *
 * SETUP (about 5 minutes, one time)
 *   1. script.google.com → New project. Name it "MoonPage reviews".
 *   2. Paste this whole file over Code.gs. Save.
 *   3. Run → setup. Approve the permissions prompt (it creates the Sheet).
 *      Copy the spreadsheet URL it prints — that is where reviews land.
 *   4. Deploy → New deployment → type "Web app".
 *        Execute as:  Me
 *        Who has access:  Anyone
 *      Deploy, then copy the Web app URL (ends in /exec).
 *   5. Put that URL in the site's build env as NEXT_PUBLIC_REVIEWS_ENDPOINT.
 *      (GitHub → repo Settings → Secrets and variables → Actions → New secret.)
 *   6. Re-run the deploy workflow. The form switches over automatically —
 *      the provider is detected from the URL.
 *
 * OPTIONAL: auto-commit into the repo
 *   Set a GitHub token in Script properties and every accepted review is also
 *   committed to data/reviews-inbox.json, which triggers the site rebuild.
 *   Use a FINE-GRAINED token with Contents: read and write on the one repo.
 *   Script properties → Add: GITHUB_TOKEN, GITHUB_REPO ("owner/repo"),
 *   GITHUB_BRANCH ("master"). Without these the script still works — you just
 *   export the Sheet by hand instead.
 */

var SHEET_NAME = 'reviews';
var HEADERS = ['date', 'key', 'rating', 'author', 'text', 'submitted_at', 'source_ip'];

/** One-time setup: creates the Sheet and its header row. */
function setup() {
  var sheet = getSheet_();
  var url = SpreadsheetApp.getActive() ? SpreadsheetApp.getActive().getUrl() : '(standalone script)';
  Logger.log('Sheet ready: ' + sheet.getName());
  Logger.log('Spreadsheet URL: ' + url);
  return sheet.getLastRow();
}

/** Health check — open the /exec URL in a browser and you should see ok:true. */
function doGet() {
  return json_({ ok: true, service: 'moonpage-reviews' });
}

function doPost(e) {
  try {
    var data = parseBody_(e);
    var review = normalise_(data);
    if (!review) {
      return json_({ ok: false, error: 'invalid submission' });
    }
    getSheet_().appendRow([
      review.date,
      review.key,
      review.rating,
      review.author,
      review.text,
      new Date().toISOString(),
      '',
    ]);

    // Best effort: a failed commit must never fail the submission. The row is
    // already in the Sheet, so nothing is lost either way.
    try {
      commitToGitHub_(review);
    } catch (err) {
      Logger.log('commit skipped: ' + err);
    }

    return json_({ ok: true, success: 'true' });
  } catch (err) {
    Logger.log('doPost failed: ' + err);
    return json_({ ok: false, error: String(err) });
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.getActive();
  if (!ss) {
    // Standalone script: keep a dedicated spreadsheet, created once.
    var props = PropertiesService.getScriptProperties();
    var id = props.getProperty('SHEET_ID');
    if (!id) {
      ss = SpreadsheetApp.create('MoonPage reviews');
      props.setProperty('SHEET_ID', ss.getId());
    } else {
      ss = SpreadsheetApp.openById(id);
    }
  }
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Accepts both shapes: a JSON body (what the site sends, under a text/plain
 * content type to dodge the CORS preflight) and a classic form post, so the
 * endpoint also works if you ever point a plain HTML <form> at it.
 */
function parseBody_(e) {
  if (!e) return {};
  if (e.postData && e.postData.contents) {
    var raw = e.postData.contents;
    try {
      return JSON.parse(raw);
    } catch (ignored) {
      // fall through to the form-encoded shape
    }
    var params = {};
    raw.split('&').forEach(function (pair) {
      var i = pair.indexOf('=');
      if (i < 0) return;
      var k = decodeURIComponent(pair.slice(0, i).replace(/\+/g, ' '));
      var v = decodeURIComponent(pair.slice(i + 1).replace(/\+/g, ' '));
      params[k] = v;
    });
    if (Object.keys(params).length) return params;
  }
  return e.parameter || {};
}

function normalise_(data) {
  var key = String(data.key || '').trim();
  var rating = Math.round(Number(data.rating));
  var author = String(data.author || '').trim() || 'A parent';
  var text = String(data.text || '').trim();
  var date = String(data.date || '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    date = Utilities.formatDate(new Date(), 'UTC', 'yyyy-MM-dd');
  }
  if (!key || !text) return null;
  if (!(rating >= 1 && rating <= 5)) return null;
  if (text.length > 600) text = text.slice(0, 600);
  if (author.length > 40) author = author.slice(0, 40);
  return { key: key, rating: rating, author: author, text: text, date: date };
}

/**
 * Append the review to data/reviews-inbox.json in the repo, which is what
 * `npm run reviews:ingest` consumes. No-op unless GITHUB_TOKEN is configured.
 */
function commitToGitHub_(review) {
  var props = PropertiesService.getScriptProperties();
  var token = props.getProperty('GITHUB_TOKEN');
  var repo = props.getProperty('GITHUB_REPO');
  var branch = props.getProperty('GITHUB_BRANCH') || 'master';
  if (!token || !repo) return;

  var path = 'data/reviews-inbox.json';
  var api = 'https://api.github.com/repos/' + repo + '/contents/' + path;
  var headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/vnd.github+json',
  };

  var existing = [];
  var sha = null;
  var get = UrlFetchApp.fetch(api + '?ref=' + branch, {
    headers: headers,
    muteHttpExceptions: true,
  });
  if (get.getResponseCode() === 200) {
    var payload = JSON.parse(get.getContentText());
    sha = payload.sha;
    try {
      var decoded = Utilities.newBlob(
        Utilities.base64Decode(payload.content.replace(/\s/g, ''))
      ).getDataAsString();
      var parsed = JSON.parse(decoded);
      existing = Array.isArray(parsed) ? parsed : parsed.reviews || [];
    } catch (ignored) {
      existing = [];
    }
  }

  existing.push(review);

  var body = {
    message: 'review: ' + review.key + ' (' + review.rating + '/5)',
    content: Utilities.base64Encode(
      Utilities.newBlob(JSON.stringify({ reviews: existing }, null, 2)).getBytes()
    ),
    branch: branch,
  };
  if (sha) body.sha = sha;

  UrlFetchApp.fetch(api, {
    method: 'put',
    headers: headers,
    contentType: 'application/json',
    payload: JSON.stringify(body),
    muteHttpExceptions: true,
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
