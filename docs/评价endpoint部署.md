# 评价 endpoint 部署说明

> **状态**：✅ **已经做好并可直接使用**（2026-09-16）
> **相关代码**：`lib/reviewEndpoint.ts`、`components/ReviewForm.tsx`、`components/ReviewSection.tsx`、`scripts/ingest-reviews.mjs`、`scripts/apps-script/review-endpoint.gs`

## 一句话说明

表单现在**开箱即用**，不需要你去注册任何账号。
默认走 **FormSubmit**（一个不需要注册的表单中继：你把字段 POST 给它，它把内容发到你的邮箱）。
**唯一需要你做的一次性动作**：第一次有人提交后，FormSubmit 会给你发一封确认邮件，**点里面的链接**，之后所有提交才会真正开始送达。

> 收件邮箱 = `lib/site.ts` 里的 `SITE.contactEmail`（`moonpageapp@gmail.com`）——
> 和原来 mailto 兜底用的是同一个信箱，**没有多出任何新的数据去向**。

## 为什么用中继，而不是让表单直连 GitHub

静态站没有服务端。任何「让浏览器直接写进仓库」的方案都必须把 GitHub token 放进前端代码，
而前端代码是公开的 —— 等于把仓库写权限交给全世界。所以**表单必须 POST 到一个第三方端点**，
再由我们（或脚本）把内容搬进 `data/reviews.json`。

这同时也是**合规上的必需**：Google 要求标记进 `aggregateRating` 的评价必须是**我们自己的、可核验的**，
不能跨站聚合（例如照搬 App Store 评分）。多一道人工入库闸门，正好让每一条评分都「经过人眼 + 可从仓库复现」。

## 一次性激活（约 1 分钟）

> ✅ **激活邮件已于 2026-09-16 发出**（我用真实浏览器头实测端点时触发的）。
> 请去 `moonpageapp@gmail.com` 收信，找到 FormSubmit 的 **Activate Form** 链接点一下即可。
> 主题行是 **「MoonPage review endpoint — SETUP TEST (please activate)」**；如果收件箱没有，**先查垃圾邮件**。

激活之前会发生什么（我实测过）：端点返回

```json
{"success":"false","message":"This form needs Activation. We've sent you an email containing an 'Activate Form' link..."}
```

HTTP 状态是 **200** —— 所以**只看状态码会误判成功**。前端的 `responseAccepted()` 特意解析响应体，
把这种情况判为**失败**，于是页面上会出现「That didn't go through + Send it by email instead」，
评价不会凭空消失。**换句话说：在激活之前，家长看到的是兜底提示，不是假的「谢谢」。**

想自己再触发一次激活邮件也可以（从真实浏览器打开站点、在故事页底部提交一条即可）。

### 已验证的端点事实（2026-09-16 实测）

| 检查 | 结果 |
|---|---|
| CORS 预检（浏览器 fetch 必需） | `access-control-allow-origin: *`、`allow-methods: GET, POST, PUT, OPTIONS` → **通过** |
| 未激活时的响应 | HTTP 200 + `success:"false"` → 前端判为失败（符合设计） |
| 无来源页面的请求 | 被拒（FormSubmit 防滥用）→ 所以**必须从站点页面提交**，curl 裸调不通属正常 |

## 如何入库

表单只负责把评价送到你手上。要让评分真的出现在页面上（并同时出现在 `aggregateRating` 结构化数据里），
需要把它合并进 `data/reviews.json`，然后提交推送。

### 方式 1：一行一条（推荐，最快）

把评价粘进 `data/reviews-inbox.txt`，格式：

```
key | 评分 | 作者 | 日期 | 正文
```

- 只有 `key`、`评分`、`正文` 是必填；`作者` 默认 `A parent`，`日期` 默认今天
- `key` 用 **故事 slug**（就是 URL `/stories/<slug>/` 里那一段）
- 站点级评价（首页那块）用 **`site`**
- 正文里可以带 `|`，不会解析错
- 以 `#` 开头的行会被忽略，可以当注释

```
# 2026-09 收到的评价
site | 4 | A dad | | The app finally made bedtime calm in our house.
brunos-snow-day | 5 | Sarah M | 2026-09-20 | My daughter asks for this one every night.
```

然后：

```bash
npm run reviews:ingest
```

### 方式 2：JSON

`data/reviews-inbox.json`（或直接指定路径）：

```bash
npm run reviews:ingest -- path/to/inbox.json
```

也接受 `{"reviews": [...]}` 这种带外层对象的写法。

### 生成模板

```bash
npm run reviews:ingest -- --template
```

### 脚本会替你做的检查

| 检查 | 行为 |
|---|---|
| 字段是否合法 | 缺 `key`/`正文`、评分不是 1–5 整数、日期不是 `yyyy-mm-dd` → **跳过并打印原因** |
| 是否重复 | 同 `key + 作者 + 日期 + 正文` 视为同一条 → 跳过 |
| **key 是否真实存在** | 拼错的 slug → **打印警告**（否则这条评价会「渲染到不存在的页面」，看起来像凭空消失） |
| 结果 | 打印新增/重复/非法条数 + 每个 key 的分布 |

## 入库之后

```bash
npm run build        # 本地确认
git add data/reviews.json && git commit -m "reviews: ..." && git push
```

推送后 Actions 自动重建并部署。此时：

- 故事页出现**可见**的评价区（星级 + 作者 + 正文 + 日期）
- 同一页的 `Book` JSON-LD 出现 `aggregateRating` + `review` 节点
- 首页（站点级 `site`）的 `MobileApplication` 出现 `aggregateRating`

**三者是绑定的**：`lib/reviews.ts` 里 `count = 0` 时**一个标记都不输出**，
页面也不会显示星级。这是故意的 —— 没有真实评价就不该有评分标记。

## 升级：换成你自己的端点（约 5 分钟）

如果你想摆脱第三方中继、把提交直接写进自己的 Google Sheet，仓库里已经写好了一份
**Google Apps Script 端点**：`scripts/apps-script/review-endpoint.gs`（文件顶部有完整步骤）。

要点：

1. `script.google.com` → 新建项目 → 把 `.gs` 全文粘进去
2. 运行 `setup()` 一次（会建好 Sheet）
3. 部署 → 新建部署 → 类型选 **Web 应用** → 执行身份「我」→ 访问权限「**任何人**」→ 拿到 `/exec` 结尾的 URL
4. 把这个 URL 存进仓库 Secrets，名字 **`REVIEWS_ENDPOINT`**，然后重跑部署

前端**不需要改代码** —— `lib/reviewEndpoint.ts` 会按 URL 自动识别服务商：

| URL 特征 | 识别为 | 发送方式 |
|---|---|---|
| 含 `formsubmit.co` | `formsubmit` | multipart 表单 |
| 含 `script.google.com` | `appsscript` | `text/plain` 包 JSON |
| 其他 | `json` | `application/json` |

> ⚠️ **Apps Script 那一条为什么用 `text/plain`**：Apps Script 的 Web 应用**无法响应 CORS 预检请求**，
> 而 `Content-Type: application/json` 一定会触发预检 → 请求直接失败。
> 改成 `text/plain`（简单请求，不触发预检），由脚本自己解析 JSON body，就能通。
> **不要把它「改回」`application/json`。**

### 全自动模式（可选）

`.gs` 里还带了一个可选的 `commitToGitHub_()`：在脚本属性里配好
`GITHUB_TOKEN`（**细粒度 token，只给这一个仓库的 Contents: read and write**）、
`GITHUB_REPO`、`GITHUB_BRANCH`，之后每条评价都会自动提交到 `data/reviews-inbox.json`，
触发站点重建。不配也完全可用 —— 只是需要你手动导出 Sheet。

## 故障排查

| 现象 | 原因 / 处理 |
|---|---|
| 提交后页面提示「That didn't go through」+ 邮件链接 | 端点没接受。先确认 FormSubmit 那封确认邮件点了没有 |
| 提交显示成功但没收到信 | 查 `moonpageapp@gmail.com` 的**垃圾邮件**；FormSubmit 的首次确认信常被误判 |
| 想临时关掉表单 | 把 `NEXT_PUBLIC_REVIEWS_ENDPOINT` 设为 `none` |
| 评价入库了但页面没变 | `data/reviews.json` 提交推送了吗？部署是 push 到 `master` 才触发的 |
| 评价入库了但**哪页都没有** | ingest 时应该打印过 `unknown key` 警告 —— slug 拼错了 |
