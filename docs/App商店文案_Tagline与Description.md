# Tagline / Description 怎么写

## 一、先分清你在填哪个字段

`Tagline / Description` 这个**连写的字段名**只出现在一个地方——**EAS 的提交表单**。我把它的实际字段抓下来了：

| 字段 | 表单里的 name | placeholder |
|---|---|---|
| URL | `ReviewRequest[url]` | `https://yourproduct.com/ (or App Store / Google Play)` |
| **Tagline / Description** | `ReviewRequest[note]` | **`Tell us what it does and who it is for...`** |
| Type | `ReviewRequest[type]` | 下拉：iOS app (iPhone / iPad) / Android app / … |
| Category | `ReviewRequest[question_3]` | 下拉 |
| Your Name | `ReviewRequest[name]` | Your name |
| Contact Email | `ReviewRequest[email]` | name@company.com |
| How did you hear about us? | `ReviewRequest[source]` | |

**提交地址（注意不是 `/developer`）**：**https://www.educationalappstore.com/developer/contact-us**

### ⚠️ 更正我上一轮给你的说法

我上一轮说 EAS 提交要「准备 7 类材料、30–45 分钟」——**那是「认证流程」的要求，不是这张初始申请表的**。这张表只有 7 个字段，**只有 `Tagline / Description` 一栏需要写字**。所以比我说的简单得多。

我准备好的那 7 类材料**不是白做**：他们初审通过后如果要走认证（Certification），就会要 learning outcomes / features / pricing / data & safety 那些。留着。

---

## 二、EAS 的 `Tagline / Description` —— 直接复制这个

那是个 4 行的 textarea，placeholder 写着 *"Tell us what it does and who it is for..."*。所以**「做什么 + 给谁用」是它明确要的两件事**，再加一句为什么值得评测。

```
MoonPage is a bedtime story app for children aged 2 and up, and for the parents and
carers who read with them. It holds 45 original illustrated picture books that a child
can hear from a professional narrator or in a parent's own recorded voice. Stories are
written in book language rather than conversational language and run about five minutes
each, so they fit a repeatable bedtime routine. No ads, no third-party trackers, no
account or login, and stories play offline once downloaded.
```

**约 490 字符 / 5 行。** 每一句都在回答评审会问的问题：

| 句子 | 回答了什么 |
|---|---|
| `bedtime story app for children aged 2 and up, and for the parents and carers` | **给谁用**（placeholder 明确要的） |
| `45 original illustrated picture books` | **做什么**，且「原创」区分于公版重印 |
| `professional narrator or in a parent's own recorded voice` | 差异化功能 |
| `written in book language rather than conversational language` | **教育价值**（这是 Educational App Store，必须有） |
| `about five minutes each, so they fit a repeatable bedtime routine` | 为什么短是优点 |
| `No ads, no third-party trackers, no account` | 儿童 App 评审最看重的安全面 |

**如果表单嫌长，用这个短版（约 355 字符）**：

```
MoonPage is a bedtime story app for children aged 2 and up and the parents who read
with them: 45 original illustrated picture books, read by a professional narrator or in
a parent's own recorded voice. Each story runs about five minutes and is written in book
language rather than conversational language. No ads, no trackers, no account.
```

⚠️ **别改「book language」那句**。它是这一栏里唯一的教育价值论据，删了就等于把自己从「教育类 App」降级成「娱乐类 App」。

---

## 三、App Store 的 Description —— 我查了，有个大问题

你的 App Store 描述**现在只有 785 字符，而预算是 4000** —— 只用了 **20%**。

**更要紧的是漏了什么**：描述里**完全没有提到** 45 个故事、22 个主题合集、专业旁白、**家长录自己的声音**、离线播放。这些是你最强的卖点，一个都没写进去。

**还发现一处**：描述里的隐私政策链接指向 `hao313131.github.io/moonpage-legal/...`（GitHub Pages 子站），而不是你自己的 `moonpageapp.com/privacy/`。两个都实测在线（都是 200），但**指向主站更好**：品牌一致，而且访客不会突然跳出到另一个域名。

### 重写版（约 1,850 字符，直接复制）

```
MoonPage is a bedtime story app for children aged 2 and up — 45 original, illustrated picture books, written to be read together at the end of the day.

Every story is short by design, about five minutes, so bedtime ends on purpose instead of turning into an endless feed. Read it aloud yourself, or let a professional narrator do it — and you can record your own voice for any story, so your child hears the reading they know even when you can't be in the room.

NO ADS. NO TRACKERS. NO ACCOUNT.
MoonPage carries no advertising of any kind, no third-party trackers, and nothing to sign up for. Open the app, choose a story, start reading.

WHAT'S INSIDE
• 45 original illustrated picture books, written and drawn for MoonPage — not public-domain reprints
• 22 themed collections, from sleepy-time and animals to kindness, courage and big feelings
• Every story narrated by a professional voice, or read in your own recorded voice
• Stories download to the device and play with no internet connection — for travel, waiting rooms and power cuts
• Short by design: about five minutes each, so the routine stays predictable
• A calm reader with nothing to tap through and no ads to close

FOR PARENTS AND CARERS
• No account, no email address, no profile — nothing to sign up for
• If you enter a child's name, it stays on the device and is never sent anywhere
• Free stories are included, so you can try it tonight

PRICING
Free to download. Some stories are free to read now. The full, continually updated library requires an auto-renewing MoonPage Premium subscription (monthly or yearly, billed through the App Store). Subscribers get the current Premium titles plus new stories added while subscribed.

Terms of Use (EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
Privacy Policy: https://moonpageapp.com/privacy/
```

**为什么这样排**：App Store 只显示描述的前几行，用户要点「更多」才展开。所以**前 3 行必须是完整的价值主张**——现在是「做什么 + 为什么短是优点 + 最独特的那个功能（录自己的声音）」。

**合规检查**（Apple 的硬规则，我逐条对过）：无价格数字、无「best / #1」这类无法证实的最高级、无竞品名、subscription 明确写了 auto-renewing。✓

---

## 四、Subtitle（= tagline）**不用改**

我抓了你的 App Store 页面，现在的实际配置是：

| 字段 | 现在的值 | 字符 |
|---|---|---|
| App Name | `MoonPage: Cozy Bedtime Stories` | **30**（正好用满） |
| **Subtitle** | **`Read Aloud Picture Books`** | 24 |

**这是教科书级的 ASO 配置**：两个字段**没有任何一个实词重复**，合起来覆盖 5 个不同的搜索词 —— `cozy` / `bedtime` / `stories` / `read aloud` / `picture books`。Apple 的索引里重复词不额外加分，所以这个「不重复」是刻意做对的。**别动它。**

> 顺带一提：`lib/site.ts` 里的 `subtitle` 写的是 `Sleepy Picture Storybooks`，和 App Store 实际用的 `Read Aloud Picture Books` 不一致。**这不影响线上任何东西**（那个字段只用于代码内注释性的记录），但如果想保持一致，改代码里的值即可，别改 App Store 的。

---

## 五、两个顺带发现（你自己判断要不要处理）

### 1. App Store 的开发者名是 `Hao Xin`，不是 `EchoRealm`

App Store 列表上显示的 seller / developer 是 **`Hao Xin`**（个人名）。而你的网站、`/press` 页、结构化数据里，运营方写的都是 **`EchoRealm`**。

**为什么会不一致**：Apple 个人开发者账号显示个人真名；要显示公司名需要公司账号（需 D-U-N-S 号，年费 $99）。

**为什么值得注意**：记者或用户看了 press 页写「Publisher: EchoRealm」，再去 App Store 看到「Hao Xin」，**会对不上**。这不是 bug，是账号类型决定的——但你要知道这个不一致存在。

### 2. 隐私政策有两个版本在线

| URL | 状态 |
|---|---|
| `moonpageapp.com/privacy/` | 200 ✓（主站） |
| `hao313131.github.io/moonpage-legal/privacy-policy/en.html` | 200 ✓（GitHub Pages） |

App Store 描述里引用的是后者。**建议统一到主站那个**（上面重写版已经换好了）。如果 App Store Connect 里的「Privacy Policy URL」字段也填的是 GitHub Pages，一起换掉。

---

## 一句话

**EAS 那一栏，复制 §2 的第一段就行。** App Store 的描述是另一个独立问题（§3），不着急，但它现在是「用 20% 的空间漏掉全部卖点」的状态。
