# MoonPage 网站增长作战（GROWTH_PLAN）

> 目标：把 moonpageapp.com 的「点击 / 浏览」数据拉起来。
> 适用：MoonPage 营销官网（Next.js 静态导出 + GitHub Pages，Umami 分析）。
> 写于：2026-08-17。结论基于对本仓库代码的实地核查，不是泛泛建议。

## 0. 先说清楚：站内 SEO 已经很强，别在这上面继续内耗

实地核查后确认，这个站点的**站内/技术 SEO 已经是 9/10 水准**，不是流量差的原因：

- 结构化数据齐全：Organization / WebSite / MobileApplication / Article / Breadcrumb / FAQPage / HowTo 全有。
- sitemap 分级优先级 + lastmod（取自 git 真实变更时间，不是每次部署瞎盖）、robots 放行搜索与 AI 爬虫、IndexNow 已接（key 在 `public/indexnow-key.txt`）。
- 30+ 篇 guides 标题本就按「家长会搜的问题」写（如 *How to Build a Bedtime Routine That Actually Works*），且带 `related` 内链；guide 详情页有下载 CTA（按 slug 区分 Umami campaign）+ 相关阅读 + FAQ 链接。
- hub 页（/bedtime-stories、/toddler-bedtime-stories …）都链向 guides，内链闭环完整。
- OG 图已是正经 1200×630 卡片（非占位）。
- 转化埋点已接：下载点击 `data-umami-event="download-click"`（store + placement 维度）、社交点击 `social-click`、`site-search` 也已补上。

**所以瓶颈在两层：① 发现层没测量（GSC/Bing 没验证）；② 站外权重/分发几乎为零（新域名、无外链、社交没起量）。** 下面只打这两层。

---

## 1. 第 0 步（本周必做，已留好代码口子）：把发现层接上

没有 GSC，你只在看 Umami 的「访问总数」，看不到**曝光量 / 平均排名 / CTR**——也就是不知道到底是「没排上」还是「排上了没人点」。

代码改动已落地（`app/layout.tsx` 头部加了 4 个验证 meta，值为 `REPLACE_WITH_*` 占位）：

1. **Google Search Console**
   - 去 console，添加属性 `https://moonpageapp.com`（用「网址前缀」）。
   - 验证方式二选一：
     - 把 `REPLACE_WITH_GSC_CODE` 换成 GSC 给的 `<meta>` 里的 content 值（改完部署即生效）；
     - 或在域名 DNS 加一条 TXT 记录（推荐，之后 meta 可留空）。
   - 验证后做三件事：
     - **站点地图**：填 `https://moonpageapp.com/sitemap.xml`（robots 已指向它）。
     - 看 **「网页索引收录情况」**：确认页面是否被收录（新站首次提交后通常几天到两周才大量收录，属正常）。
     - 看 **「搜索查询结果」**：盯 曝光量 / 平均排名 / CTR。这是你之后所有动作的对标基线。
2. **Bing Webmaster Tools**（顺带覆盖 Yahoo）：把 `REPLACE_WITH_BING_CODE` 换成 msvalidate 值。
3. （可选）**Yandex** / **Pinterest** 验证：换 `REPLACE_WITH_YANDEX_CODE` / `REPLACE_WITH_PINTEREST_CODE`。Pinterest 在育儿/绘本人群里是真实分发渠道。

> 验证后第一周的关注点只有一个：页面有没有被收录（覆盖率），以及有曝光的关键词平均排在哪里。别急着看访问量。

---

## 2. 第 1 步（真正的增长杠杆）：权重 = 外链

新域名权重≈0，再好的 on-page 也排不过 Calm、Storyberries 这类老站。**一条相关外链顶 100 次站内微调。** 按「性价比」排序去打：

### 2.1 产品目录 / 聚合（最快、最稳）
- **ProductHunt** 发帖（选「Children」类目）+ 自己的 Ship 页。
- **AlternativeTo**（搜 bedtime stories / kids books 的替代品条目里加 MoonPage）。
- **澳大利亚本地**：Australian Made / 本地 parenting 目录、儿童 App 评测站投稿。
- **App 商店侧**：Apple App Store 的「你可能也喜欢」靠下载量与评分，先把 App Store 评价做起来（站内 CTA 已就位）。

### 2.2 育儿博客客座文 / 专家引述（权重最高）
- 找澳洲 / 英语圈 parenting 博客（秒搜：`parenting blog Australia "write for us"`、`kids sleep blog guest post`）。
- 投稿角度别硬广，用 guides 里现成的内容做钩子，例如：
  - 「How we built a bedtime routine that stuck (and the stories that helped)」
  - 文末自然带 MoonPage + 一条 dofollow 链接到对应 guide。
- **模板（ outreach 邮件）**：
  > Subject: Guest post — bedtime routines that actually work (from the team behind MoonPage)
  > Hi [Name], loved your piece on [their article]. We publish free, non-clinical bedtime guides for parents of 2–7s and I'd love to contribute a 800-word original on [angle] for [their blog]. No promo beyond a short bio + one link. Happy to send a draft this week. — Vinco, MoonPage

### 2.3 Reddit / Facebook 真实分享（不是硬广，是助人）
- `r/Parenting`、`r/daddit`、`r/toddlers`、`r/beyondthebump`：在「求哄睡办法」的帖子里，以普通家长身份分享 guide 链接当参考资料（先读版规，别 spam，否则被 ban 反而伤域名）。
- Facebook 本地育儿群（澳洲城市群）同理。

### 2.4 HARO / Featured（专家引述换链接）
- 订阅 `HARO`（或 `Featured.com`），抢「parenting / child sleep」类征询，以 MoonPage 创始人身份给一句引述 → 媒体发文带链接。

---

## 3. 第 2 步：内容意图别停在「app 词」，要吃掉「问题词」

guides 已经吃掉了大部分问题词。再加码两件事：

- **把表现最好的 3–5 篇 guide 在 GSC 里看 CTR**：有曝光但 CTR 低 → 改 `<title>`/description 更「勾人」（当前 description 刻意写短利排名，但 CTR 靠吸引力，可小范围 A/B）。
- **补 FAQ 覆盖「People Also Ask」**：每篇 guide 已支持 `faqs` 字段且会发 FAQPage 结构化数据。挑搜索量高的词，往对应 guide 加 2–3 条 PAA 问题，抢富摘要位。
- **内链**：hub 页已链 guides，保持即可；新写 guide 时务必填 `related` 并反向在老 guide 加链（双向内链）。

---

## 4. 第 3 步：社交是比 SEO 来得快的流量

代码里 TikTok/Instagram 都接好了（`sameAs` + 页脚关注），但**睡前故事/哄睡在 TikTok 是天然爆款场景**：

- **TikTok**（先起量，代码里目前只放了 Instagram，TikTok 链接在 `SocialLinks` 被注释）：把 `TikTokLink` 打开，发「睡前故事朗读」「宝妈真实反馈」「同一个故事讲 100 遍怎么回事」类短视频，挂 linkinbio → 官网。
- **Instagram**：绘本封面 + 一句钩子，Stories 挂「了解更多」。
- **Pinterest**：把 guides 做成图文钉（育儿/绘本人群重度使用），验证后可带自然流量。

---

## 5. 第 4 步（加速器，非必需）：付费

站内/SEO 起量前，付费能买时间：

- **Apple Search Ads**：直接抢「bedtime stories app」等词的高意图用户，归因最干净（App Store Connect 报告）。
- **Meta / TikTok 暗社交广告**：用 `/get` 落地页（已 `noindex`，专付付费流量），campaign 参数已就位，方便分渠道算 ROI。

---

## 6. 30 天执行清单

| 周 | 动作 | 完成标准 |
|----|------|----------|
| W1 | GSC/Bing 验证 + 提交 sitemap | 覆盖率报告里页面开始进「已收录」 |
| W1 | 列 20 个育儿博客 / 产品目录外链目标 | 表格成型，开始发 5 封 outreach |
| W2 | 发 ProductHunt + AlternativeTo | 链接上线 |
| W2 | 起 TikTok（开 `TikTokLink`），日更 1 条朗读短视频 | 挂 linkinbio → 官网 |
| W3 | GSC 看 CTR，改 3–5 篇低 CTR guide 标题 | CTR 环比上升 |
| W3 | 给高搜索量 guide 加 PAA FAQ（2–3 条） | FAQPage 富摘要出现 |
| W4 | Reddit/Facebook 真实分享 3 次 | 带来自然 referral（Umami 看得到） |
| W4 | 复盘：曝光/排名/CTR 趋势，决定要不要上付费 | 有基线数据可决策 |

---

## 附：已落地的代码改动（本仓库）
- `app/layout.tsx`：加 GSC/Bing/Yandex/Pinterest 验证 meta（占位待填）。
- `components/SearchClient.tsx`：站内搜索提交发 `site-search` Umami 事件（query + 结果数）。
- OG 图、内链、guide 标题意图：核查后确认已达标，未做无谓改动。
