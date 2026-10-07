# SEO / 搜索排名 2026 前沿打法 — MoonPage 对齐清单

> 生成日期：2026-10-01。目的：把全网 2026 年当前最前沿的 SEO / 搜索可见性打法，与 MoonPage 的真实状态对齐，给出「已做 / 别做 / 待裁决 / 真正该做」的执行清单。
> 信息源：Semrush、WantSEO、Enrich Labs、Relevant Audience、Digimau、WPPoland 等 2026 年发布的指南（链接见文末）。

---

## 0. 三十秒结论

**你已经把 2026 年所有指南里 90% 的「技术层 + GEO 底座」提前做完了。** 当前的瓶颈（见 `口径快照_封盘与对外提交.md` §0）是**域名权重 / 站外权威**，不是站内技术或内容。

所以 2026 年的「先进手段」对你而言不是「再改站内」，而是：
1. **把站外权威（实体 + 数字 PR + 品牌提及）做起来** —— 这是唯一还能撬动排名的杠杆；
2. **让 AI 引擎引用你** —— 你已铺好被引用的技术底座（llms.txt + 放行 AI 爬虫 + 结构化数据），缺的是「被引用」所需的权威与品牌声量；
3. **别再为 SEO 动站内内容**（已封盘，且边际收益趋零）。

---

## 1. 全网 2026 共识（数据背书）

### 1.1 搜索范式已经变了：从「排蓝链第一」到「被 AI 答案引用」
- **Google AI Overviews（AIO）已覆盖 ~48% 的搜索**（2026 年初；2025-12 为 34.5%、2025-02 为 31%，持续上升）。
- AIO 出现时，**自然 CTR 平均下降 58–61%**（Seer：有 AIO 0.61% vs 无 AIO 1.62%，-61%；Ahrefs 首屏 -58%）。
- **零点击率 2026 年达 64.8%**；在 Google AI Mode（全对话界面）里高达 **93%**。
- **被 AIO 引用的页面反而赚溢价**：CTR +120%、流量 +35%、展现 +340%（Seer）。
- 含义：Parent 搜「best bedtime story app for kids / free read-aloud books for toddlers」时，你的目标从「排第一」变成「出现在 ChatGPT / Perplexity / Gemini / AIO 的答案句子里」。

### 1.2 GEO（生成引擎优化）的具体手法
Princeton KDD 2024 研究（被 2026 指南反复引用）给出能提升 AI 引用率 ~40% 的改写手法；2026 年落地为 8 大战术：
- 前 200 词直接完整回答（TL;DR-first）；
- H2/H3 用疑问句格式（"What is…" 比 "Overview" 引用率高）；
- **嵌入原始统计 / 数据 / 研究**（最易引用，且 AI 无法从别处合成）；
- 每篇 6+ FAQ 并加 FAQ schema（无 schema = 对 AI 检索「结构性不可见」）；
- 具名 + 可验证资历的作者 bio；
- **抢品类定义术语**（谁拥有最权威的「what is X」定义，谁拥有该品类每个查询的 AI 引用）；
- 对比表格 + 用例板块（匹配比较查询）；
- 可见「Last Updated」日期 + 季度刷新（新鲜度信号）。

### 1.3 链接建设 2026：权威 > 数量
- **主题权威链接 > 原始域名权重**：来自同语义簇的 DR 30 小站，比无关 DR 80 新闻站更有分量。
- **独特引荐域名数 > 总反链数**：一个新域的 1 条链接 > 老域再发 10 条。
- 真实杠杆 = **数字 PR + 关系驱动**（原创研究 / 专家引述 / 互动工具被记者主动报道），不是群发客座或买链（踩 SpamBrain）。
- 小站战术：失效链接建设、资源页链接、HARO/Qwoted 专家引述、未链接提及追链、实体信号（Wikidata / 共引）。

### 1.4 llms.txt：零成本期权
- **ClaudeBot 读；Google 明确说不读；OpenAI 未官宣；Perplexity 部分遵守；RAG/agent 工具采纳最强。**
- 它不是排名因素，是「检索 + 引用」辅助。成本几乎为零、下行风险为零、上行是新增分发入口 → 保留并维护。

---

## 2. MoonPage 现状对齐

### 2.1 ✅ 已做（领先同行，别重复做）
| 项目 | 状态 | 备注 |
|---|---|---|
| `llms.txt` + `llms-full.txt` | ✅ 自动生成 | 策展头部（品牌 + 关键事实）+ 64 篇指南全文，随构建刷新 |
| AI 爬虫放行 | ✅ 13 个显式 Allow | `app/robots.ts`：GPTBot / ClaudeBot / Google-Extended / PerplexityBot / CCBot 等全部 Allow —— **匹配 App 转化模型**（storyberries 反向全封是因为广告模型，不适用于我们） |
| FAQ schema | ✅ 90 个 FAQPage | 已超 4 个标杆站（它们 0 个） |
| 结构化数据 | ✅ 979 块 / 解析失败 0 / 悬空 @id 0 | 09-29 审计 |
| Core Web Vitals | ✅ 3–20 倍余量 | LCP 移动 292–840ms、CLS ≈0 |
| 无障碍 | ✅ 全站 0 页违规 | 09-29 已修完 |
| 内部链接 | ✅ 10,993 实例 / 失效 0 | |
| URL 规范化 | ✅ 301/200/404 全对 | |
| 「赢家形状」内容写法 | ✅ `/picture-books-for-kids/` | 品类词 + 年龄 + 收益修饰 + 家长口语问答，位置 19.7 拿 11.7% CTR（期望 ~1%） |

### 2.2 ❌ 别做（尊重封盘 + 审计结论）
- **为 SEO 重写站内内容** —— 内容层 09-26 封盘；技术/内容层已无可修实测缺陷，再改边际收益趋零。
- **追 raw 反链总数** —— 应追主题相关 + 独特引荐域。
- **封 AI 爬虫** —— 与 App 转化模型矛盾（封了 = 堵死免费分发入口）。
- **用 App Store 评分做 `aggregateRating`** —— Google 禁跨站聚合，全站 count=0 时零标记。
- **新建更多分类页** —— 22 书架 ÷ 45 故事密度已高于标杆；规模差在**故事总量**（内容生产决策，非 SEO）。
- **把「无 /collections 链接」当缺陷** —— Footer 固定链 4 书架，设计如此。

### 2.3 ⏸ 待你裁决（已记录在案）
- `SITE.trustLine`（5 页，「Trusted by thousands of moms…」核实不到依据）→ 4 选项待勾选。
- `/bedtime-stories-app/` 标题 → **卡在 GSC 重授权**（token 已过期，拉不到 query×page 矩阵，无法判断那 73 次曝光来自哪些词）。

---

## 3. 真正该做的 90 天（按省时 / 杠杆排序）

### P0 — 解锁 GSC 重授权（4 分钟，你做）
`console.cloud.google.com/auth/audience` → **PUBLISH APP**（永久修法：同意屏幕 External + Testing 导致 refresh token 7 天过期）。
→ 做完第一件事：拉 `dimensions:["query","page"]` 矩阵 → 一次性裁决 `/bedtime-stories-app/` 标题。

### P0 — 实体建设（零成本、站外、不碰封盘）
- 建 **Wikidata 条目**（MoonPage / EchoRealm）：把 app 名、运营主体、App Store id、官网、类目对齐成机器可读实体。
- 全网点**品牌叙述统一**：网站 `/press`、App Store、社交 bio 用同一句「MoonPage is a free iOS app of original illustrated bedtime stories for kids 2+…」。AI 跨源合成时信息冲突会损害可信度。
- 这是小站「破圈乘数」：链接图谱 + 实体图谱互促。

### P1 — 数字 PR / 主题权威获链（瓶颈真解，你驱动）
以 `/press` 媒体包为钩子，准备「可链接资产」清单后做外联：
- **HARO / Qwoted / Terkel** 专家引述：设「bedtime / screen time / reading aloud」关键词警报，30 分钟内响应，开篇亮资历 + 给可直引短句与独家数据。一次 Forbes/育儿媒体引用即可显著抬升 AI 引用概率。
- **失效链接建设**：在育儿资源页扫 404 → 用现有指南做替代 → 短邮换链。
- **资源页链接**：`"useful resources" + [bedtime stories / parenting]` 找资源页申请加入。
- **未链接提及追链**：品牌监控发现提及未链 → 礼貌索要链接。
- ⚠️ 拒绝群发客座 / 买链（踩 SpamBrain）。

### P1 — Prompt-panel 测量（每月 1 小时，你/我轮值）
问 ChatGPT / Perplexity / Gemini：「best bedtime story app for kids」「free read-aloud books for toddlers」「bedtime routine tips for 2 year old」→ 记录 MoonPage 是否被引用、引用到哪个 URL。这是目前最直接衡量 GEO 是否生效的手段（Google 不读 llms.txt，但 Claude/Perplexity/RAG 读）。

### P2 — 收尾动作（已就绪，你执行）
- **Bing** 后台「Import from Google Search Console」→ 导入即自动验证（2 分钟）。
- **粘贴 App Store 新描述**（10 分钟，重写版见 `App商店文案_Tagline与Description.md` §3；Subtitle 别改）。

### 维护
- `llms.txt` / `llms-full.txt` 已接构建链自动刷新 → **别让它过期**（死链比没有更糟）。
- 每季度 prune：移除非济事 URL，释放抓取预算。

---

## 4. 明确别浪费时间的

- 再堆内容页（封盘 + 边际收益零；规模差在故事总量，那是内容生产不是 SEO）。
- 买链 / 群发客座（踩 SpamBrain，2026 必惩）。
- 等 Google 用 llms.txt（它明确说不读；但保留 Claude/Perplexity/RAG 的零成本上行）。
- 追「[绘本名] read online / epub / pdf」那簇（全 0 点击，是噪声不是机会）。
- 为「提升 SEO」动首页 / 45 故事页标题（冻结，要改须 ≥4 周窗口 + 可归因假设）。

---

## 5. 一句话战略

**站内已封顶，胜负手在「站外权威 + 被 AI 引用」。把精力从改写内容转到制造被引用——实体（Wikidata）+ 数字 PR（HARO/资源页）+ 品牌提及（未链接追链），并用 prompt-panel 每月验证是否进 AI 答案。**

---

## 附：信息来源（均为 2026 年发布）
- Semrush — *13 Advanced SEO techniques & strategies for 2026* (2026-07-27)
- WantSEO — *Advanced SEO: Complete Guide to AEO, GEO & AI Search in 2026* (2026-07-03)
- Enrich Labs — *GEO: The Complete 2026 Guide* (2026-07-14)
- Relevant Audience — *Google AI Overviews & Organic CTR in 2026* (2026-03-16)
- Digimau — *llms.txt and AI Crawlers in 2026* (2026-09-11)
- WPPoland — *Link Building Strategy 2026: Topical Authority, Digital PR* (2026-09-22)
- Princeton KDD 2024 — *GEO: Generative Engine Optimization*（被上述指南反复引用，avg +40% 引用率）

> 数据诚实标注：AI 引荐流量的具体百分比多来自营销博客二手数据，且 llms.txt 行业采用率仍不确定；保留它的理由是**成本为零、下行为零、上行是新增分发入口**，不是「确定有效」。
