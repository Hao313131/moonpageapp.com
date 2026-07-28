import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "How MoonPage collects, uses, and protects information. Most data stays on your device — no ads, no third-party tracking, no account required.",
});

/**
 * Ported verbatim from the moonpage-legal repo (privacy-policy/en.html) —
 * wording is unchanged, only the container/styling moved to match this site.
 * Source of truth for the actual legal text stays moonpage-legal; if it's
 * ever amended there, re-port the changes here too.
 */
export default function PrivacyPolicyPage() {
  const email = SITE.contactEmail;
  return (
    <LegalLayout title="Privacy Policy" path="/privacy" updated="July 19, 2026">
      <LegalSection title="General">
        <p>
          The &ldquo;MoonPage&rdquo; app is a collection of illustrated
          bedtime stories for young children, intended to be used by a parent
          or guardian together with their child. Stories are designed for
          ages 2+. A parent may enter a child&apos;s first name and
          gender in Settings to personalize labels in the app (for example,
          shelf titles). We do not use those details to generate new story
          text or illustrations.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We collect only what is needed to run the app and process purchases:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Child profile (first name and gender) — stored on your device only.</li>
          <li>
            Purchase and subscription status — processed by Apple App Store
            or Google Play and RevenueCat (our subscription partner). We do
            not receive your full payment card details.
          </li>
          <li>Reading progress, favorites, and app preferences — stored on your device.</li>
          <li>
            Parent voice recordings — audio files you choose to record stay
            on your device unless you delete them.
          </li>
          <li>
            Anonymous diagnostics and crash data that Apple or Google may
            provide to developers through standard store tools.
          </li>
        </ul>
        <p>
          MoonPage does not require you to create an in-app account. We do
          not collect your Apple ID, Google account, or email address through
          the app.
        </p>
        <p>
          We do not sell personal information. We do not use your data for
          third-party advertising.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Information">
        <p>We use the information above to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Provide and personalize the in-app experience (shelf labels, reading progress).</li>
          <li>Verify MoonPage Premium access and restore purchases.</li>
          <li>Deliver app updates and improve stability.</li>
          <li>Respond to support requests you send us by email.</li>
        </ul>
        <p>
          We do not build advertising profiles and do not share child
          profile data with story authors or other third parties for
          marketing.
        </p>
      </LegalSection>

      <LegalSection title="Device Permissions">
        <p>
          Microphone — requested only so a parent can record their own
          narration for a story. Recordings are stored locally on your
          device. You can delete them anytime in Settings.
        </p>
        <p>We do not access the microphone in the background.</p>
      </LegalSection>

      <LegalSection title="Children's Privacy">
        <p>
          MoonPage is a parent-directed experience. We do not knowingly
          collect personal information directly from children under 13
          without parental involvement. Parents control the child profile
          and purchases. If you believe we have received information from a
          child in error, contact us and we will delete it from our support
          records.
        </p>
        <p>
          We comply with the COPPA (United States), GDPR-K / UK GDPR
          (European Union and United Kingdom), and the Australian Privacy Act
          1988 requirements for children&apos;s data. We do not serve
          personalised advertising to children, and we do not knowingly sell
          or share child profile data.
        </p>
      </LegalSection>

      <LegalSection title="Parental Access, Correction & Deletion">
        <p>
          Parents and guardians can review, update, or delete the locally
          stored child profile at any time in Settings → Child profile.
        </p>
        <p>
          To delete all locally stored app data, including child profile,
          reading progress, recordings, and favorites, use Settings → App
          data → Delete all app data.
        </p>
        <p>
          To request deletion of any information held in our support
          records, or to exercise privacy rights under Australian, EU, UK, or
          other applicable law, email us at{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          . We will respond within a reasonable time, usually within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          Most data stays on your device until you delete the app or use
          Settings → App data → Delete all app data.
        </p>
        <p>
          When we receive personal information through support emails, we
          keep it only for as long as necessary to resolve the request and
          meet legal obligations, generally no longer than 12 months after
          the request is closed. Subscription records are retained by Apple,
          Google, and RevenueCat according to their policies.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>The app relies on these service providers, each governed by their own privacy policies:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Apple App Store / Sign in with Apple (available as a device-level
            option; MoonPage does not request or collect Apple ID data
            through the app)
          </li>
          <li>
            Google Play / Google Sign-In (available as a device-level
            option; MoonPage does not request or collect Google account data
            through the app)
          </li>
          <li>RevenueCat (subscription management)</li>
          <li>Expo (over-the-air app updates)</li>
        </ul>
        <p>
          When you purchase or restore a subscription, Apple, Google, or
          RevenueCat may process identifiers required to validate your
          entitlement.
        </p>
      </LegalSection>

      <LegalSection title="Advertising">
        <p>The &ldquo;MoonPage&rdquo; app contains no third-party ads.</p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this Privacy Policy from time to time. We will
          revise the &ldquo;Last updated&rdquo; date at the top. We recommend
          checking this document periodically. Continued use of the app
          after changes means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For privacy questions, contact us at{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
