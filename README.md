<div align="center">

# 🎬 黄果短剧 (huangguoju.cyou)

### 新一代精品短剧视听平台 × AIGC 创意影视流 × 光速云原生加速生态

[![Astro](https://img.shields.io/badge/Astro-v7.3.5-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SEO Health Gate](https://img.shields.io/badge/SEO_Gate-100%25_PASS-success?style=for-the-badge&logo=google-search-console&logoColor=white)](#-四seo-自动化安全防御门禁)
[![IndexNow](https://img.shields.io/badge/IndexNow-Ready-008080?style=for-the-badge)](#-六极速收录推送-indexnow)

[🌐 官方网站](https://huangguoju.cyou) • [📱 APP 下载](https://huangguoju.co) • [⚡ 光速云网络专线](https://sahude.gsyvipaff.com/#/?code=keqgvT5Y) • [📚 排障教程库](https://huangguoju.cyou/tutorials/)

</div>

---

## 📖 项目简介

**黄果短剧 (`huangguoju.cyou`)** 是一套面向移动互联网与海外华语用户的高性能微短剧视听平台与 AIGC 影视工具导航系统。

本仓库采用现代全静态 SSG 架构与自动化 SEO 门禁系统构建，具有首屏秒开、零运行时开销、全站零死链及严苛搜索引擎友好特性。项目巧妙将 **“海外短剧流畅放映”**、**“AIGC 剧本/视频创作工具直连”** 与 **“光速云高品质网络加速专线”** 深度融合，在坚守正规影视平台品牌调性的同时，构建了高转化率的商业闭环。

---

## ✨ 核心特性

### 1. 🎭 沉浸式影院级视听矩阵
* **全景微短剧放映厅**：涵盖现代逆袭、仙侠玄幻、豪门复仇、元宇宙科幻等多题材精选短剧。
* **高质感宽银幕 UI**：深邃暗黑影院调色方案，搭配全景视差 Hero 画幅，专为移动竖屏及桌面大屏视听优化。
* **内嵌播放排障保障**：短剧详情页内置播放自检与故障加速向导，确保弱网与跨境环境零缓冲。

### 2. 🤖 AIGC 创意影视生产力导航
* **全球 9 大顶尖 AI 工具直达**：深度集成 ChatGPT、Claude 3.7、Google Gemini、Google AI Studio、Midjourney、Runway Gen-3、快手可灵 Kling、Google Veo 2、OpenAI Sora。
* **实操教程与工作流**：从 AI 分镜提示词、长篇编剧剧本生成，到院线画质动态镜头渲染的一站式指南。
* **跨境网络直通专区**：针对国内创作者常见的 `Region Not Supported`、API 连接超时等高频痛点提供无感修复方案。

### 3. ⚡ 场景化网络排障与商业转化闭环
* **拒绝广告堆砌**：全站坚决杜绝“机场排名”、“VPN推荐”、“多品牌对比”等低质垃圾信息，维护纯净品牌口碑。
* **自然刚需引流**：仅在“视频缓冲卡顿”、“解析失败”、“AI工具连接受阻”等真实故障场景展示**光速云**专线解决方案。
* **转化合规安全**：全站所有推广外链严格遵从 `rel="sponsored nofollow noopener noreferrer"` 与 `target="_blank"` 规范。

### 4. 🛡️ 工业级 SEO 全自动化防御门禁
* **8 重健康度校验**：每次构建自动执行爬虫准入、单 H1 语义、Canonical 自引用、站内 0 死链、Schema 结构化数据全量解析。
* **极速收录体系**：内置 IndexNow 批量主动推送引擎，支持 Bing / Yandex 等主流搜索引擎秒级索引收录。

---

## 🛠️ 技术栈与架构设计

| 维度 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **基础内核** | [Astro v7.3.5](https://astro.build) | 采用完全静态构建（SSG），零 JS 冗余，极致首屏加载速度 |
| **样式体系** | [Tailwind CSS v4.3](https://tailwindcss.com) | 原生现代 CSS 驱动，深色影院模式，高定制金标微动效组件 |
| **站点地图** | `@astrojs/sitemap` | 自动生成 `sitemap.xml` 及 `sitemap-index.xml` |
| **结构化数据**| Schema.org JSON-LD | 覆盖 WebSite, Organization, Movie, Article, FAQPage, BreadcrumbList |
| **质量门禁** | Custom Node.js SEO Check | 静态扫描 HTML AST、自动断言发布指标（`RELEASE_DECISION: READY`） |
| **索引推送** | IndexNow Protocol | 密钥化直接向搜索引擎服务端下发全站更新 URL |

---

## 📂 项目目录结构

```text
huangguoju.cyou/
├── 📁 public/
│   ├── 📁 images/
│   │   ├── hero-banner.png         # 首页宽幅全景主视觉海报
│   │   └── default-cover.svg       # 短剧默认兜底封面
│   ├── e8f49a21b36c4d7e90123456789abcde.txt # IndexNow 域名所有权验证文件
│   └── favicon.svg                 # 品牌矢量站点图标
├── 📁 scripts/
│   ├── seo-check.mjs               # 🔍 SEO 自动化安全门禁质检脚本
│   └── indexnow.mjs                # 🚀 IndexNow 主动批量收录推送脚本
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Header.astro            # 顶部沉浸式导航栏
│   │   ├── Footer.astro            # 底部品牌信息与免责声明
│   │   ├── SEOHead.astro           # 动态元标签、Canonical 与 JSON-LD
│   │   ├── NetworkHelpCard.astro   # 标准化场景排障与光速云转化卡片
│   │   ├── NetworkStatusDashboard.astro # Bento 网格实时网络监控面板
│   │   └── MobileStickyBar.astro   # 移动端自适应黑金悬浮转化条
│   ├── 📁 data/
│   │   ├── dramas.ts               # 短剧剧目数据源
│   │   ├── ai-tools.ts             # AI 创作工具库
│   │   └── tutorials.ts            # 22 篇排障与实战教程图文库
│   ├── 📁 layouts/
│   │   └── BaseLayout.astro        # 全局基础布局骨架
│   └── 📁 pages/
│       ├── index.astro             # 首页 (Hero / Bento 看板 / 4联排障 / 短剧精选)
│       ├── 404.astro               # 自定义 404 容灾页 (noindex 隔离)
│       ├── robots.txt.ts           # 搜索引擎爬虫协议动态生成
│       ├── sitemap.xml.ts          # 站点地图直出
│       ├── 📁 drama/               # 短剧影院区
│       │   ├── index.astro         # 剧目库列表页
│       │   └── [slug].astro        # 短剧播放详情页 (内嵌排障专栏)
│       ├── 📁 ai-drama/            # AI 短剧专区
│       │   └── index.astro         # AIGC 流程与海外专线引导
│       ├── 📁 ai-tools/            # AI 工具导航
│       │   ├── index.astro         # 工具中心索引
│       │   └── [tool].astro        # 9 大工具专属页面
│       ├── 📁 network/             # 网络诊断中心
│       │   └── index.astro         # 交互式 5 步排查向导
│       └── 📁 tutorials/           # 深度实操教程库
│           ├── index.astro         # 教程汇总页
│           └── [slug].astro        # 22 篇深度图文教程页
├── astro.config.mjs                # Astro 核心配置文件 (TrailingSlash 规范)
├── package.json                    # 依赖清单与集成脚本命令
└── README.md                       # 项目自述文档
```

---

## 🚦 本地开发与操作指南

### 1. 环境准备
确保本机已安装 [Node.js](https://nodejs.org/) (推荐 v18.17.0 或以上版本)。

### 2. 安装依赖
```bash
npm install
```

### 3. 启动本地开发服务器
推荐使用后台守护模式运行：
```bash
# 启动后台服务 (默认端口 4321)
astro dev --background

# 管理命令
astro dev status   # 查看运行状态
astro dev logs     # 查看开发实时日志
astro dev stop     # 停止后台服务
```
或直接前台运行：
```bash
npm run dev
```
本地访问地址：`http://localhost:4321`

---

## 🛡️ 四、SEO 自动化安全防御门禁

为了确保部署到生产环境的代码 100% 不触发搜索引擎惩罚或收录滑坡，项目内置了发布门禁命令：

```bash
# 执行完整构建并自动运行 SEO 门禁检查
npm run verify
```

门禁检查涵盖 8 大核心维度：
1. **Robots.txt 准入放行**：Googlebot、Bingbot、Baiduspider、Yisouspider 合规放行。
2. **Sitemap 完整性**：对比基线快照，确保可收录页面稳定在 45+。
3. **Noindex 隔离审计**：全站仅 404 页面配置 `noindex`，正常核心页面绝无误伤。
4. **Canonical 自引用 100%**：全量 HTML 绝对路径规范自引用，统一尾部斜杠 `trailingSlash: 'always'`。
5. **站内 0 死链保障**：静态扫描全站内部超链接（1800+ 条），断言 0 处断链死链。
6. **单一语义 H1 校验**：严格确保每个独立页面仅有 1 个主要 `<h1>` 标签。
7. **Schema.org JSON-LD 语法解析**：强校验结构化数据 JSON 格式，杜绝解析报错。
8. **反垃圾与黑产路径检测**：深度校验路由命名规范，阻断恶意页面或非法内容混入。

当且仅当终端显示：
```text
RELEASE_DECISION:   READY
PRODUCTION_STATUS:  LIVE_HEALTHY
```
方可推送到线上生产环境。

---

## ⚡ 极速收录推送 (IndexNow)

在生产环境部署或更新内容后，运行以下命令即可将全站所有静态页面秒级推送至搜索引擎：

```bash
npm run indexnow
```

---

## 🔗 商业化与安全配置

- **光速云官方注册统一链接**：
  `https://sahude.gsyvipaff.com/#/?code=keqgvT5Y`
- **全站外链标签规范**：
  ```html
  <a href="https://sahude.gsyvipaff.com/#/?code=keqgvT5Y" 
     target="_blank" 
     rel="sponsored nofollow noopener noreferrer">
     立即解决访问问题
  </a>
  ```
- **APP 官方下载地址**：
  `https://huangguoju.co`

---

## 📄 License

本项目代码归 **黄果短剧** 团队所有。保留一切权利。
未经授权，严禁二次封装为纯商业 VPN/机场导航平台。
