export interface AiToolItem {
  id: string;
  slug: string;
  name: string;
  category: '文本与剧本' | '图像与分镜' | 'AI视频生成' | '多模态与平台';
  company: string;
  tagline: string;
  icon: string;
  officialUrl: string;
  whatIsIt: string;
  whatItCanDo: string[];
  howForDrama: string[];
  tutorialSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  networkIssues: {
    title: string;
    description: string;
    errorCode: string;
    troubleshoot: string[];
  }[];
}

export const AI_TOOLS: AiToolItem[] = [
  {
    id: 'chatgpt',
    slug: 'chatgpt',
    name: 'ChatGPT',
    category: '文本与剧本',
    company: 'OpenAI',
    tagline: '短剧大纲、爆点对白与反转情节创作利器',
    icon: '⚡',
    officialUrl: 'https://chatgpt.com',
    whatIsIt: 'ChatGPT 是由 OpenAI 开发的全球领先多模态大语言模型，具备极强的情节逻辑梳理、爽点反转策划和自然台词生成能力，是当前爆款短剧剧组案头创作的核心工具。',
    whatItCanDo: [
      '短剧高潮卡点、黄金前三秒黄金抓手设计',
      '80-100集短剧全篇分集剧本快速扩写',
      '人物小传、角色冲突设定与多重反转构思',
      'AI漫剧的分镜Prompt生成与Midjourney提示词调优'
    ],
    howForDrama: [
      '设定短剧世界观：通过系统提示词锁定“快节奏、强冲突、密集打脸”的短剧调性。',
      '生成3秒吸睛台词：让模型提供10组不同维度的争议性对白开场。',
      '分集高潮截断：指定每集在第45秒至60秒处出现悬念钩子（Cliffhanger）。',
      '标准化分镜表输出：直接生成包含景别、动作、台词、音效的四列表格。'
    ],
    tutorialSteps: [
      { step: '01', title: '访问官方站点', desc: '在稳定的网络环境下访问 chatgpt.com 或使用官方APP。' },
      { step: '02', title: '完成账号注册', desc: '支持 Google / 微软或海外邮箱注册，需保持全程网络线路一致。' },
      { step: '03', title: '配置剧本创作专用指令', desc: '在自定义说明中注入短剧编剧人设与爆款爽点输出规范。' }
    ],
    faqs: [
      { q: 'ChatGPT写短剧如何避免机械重复？', a: '提供具体的参考案例和情绪曲线，限制每集字数，并要求分步构思关键反转点。' },
      { q: '支持直接输出分镜提示词吗？', a: '完全支持，只需在Prompt中要求“将场景翻译为Midjourney/Runway英文提示词，包含画质、光影与相机参数”。' }
    ],
    networkIssues: [
      {
        title: '提示 Region Not Supported / Access Denied',
        description: 'OpenAI针对部分国家与IDC机房IP进行了严格的地理封锁或访问拦截。',
        errorCode: 'Region Not Supported / Error 403',
        troubleshoot: [
          '检查当前代理节点的地理位置与纯净度，避免使用多人混用的免费IDC节点。',
          '彻底清除浏览器Cookie与本地缓存，或使用无痕模式。',
          '如果依然无法解决，推荐使用光速云原生住宅/高纯净IEPL专线节点访问。'
        ]
      },
      {
        title: '对话过程提示 Network Error 或 Connection Timeout',
        description: '由于国际网络链路抖动、丢包过高或长连接中断，导致流式传输中断。',
        errorCode: 'Network Error / Connection Timeout',
        troubleshoot: [
          '检查本地DNS是否遭受污染，建议切换至 1.1.1.1 或 8.8.8.8。',
          '使用高质量、低抖动的网络加速方案保障长文本流式响应稳定性。'
        ]
      }
    ]
  },
  {
    id: 'claude',
    slug: 'claude',
    name: 'Claude 3.7',
    category: '文本与剧本',
    company: 'Anthropic',
    tagline: '细腻情感刻画、复杂多线叙事与超长上下文短剧编剧',
    icon: '🎭',
    officialUrl: 'https://claude.ai',
    whatIsIt: 'Claude 是由 Anthropic 推出的顶级大语言模型，以卓越的文学修辞、细腻的人物心理把控和200K超长上下文著称，极其擅长悬疑、豪门情感与精细化短剧台词润色。',
    whatItCanDo: [
      '单次输入整本数万字短剧小说并一键切分为精准分集剧本',
      '深度捕捉人物语气差异，避免千人一面的AI说教感',
      '构建多角色复杂反转与伏笔埋设',
      '严格按照工业化剧本格式规范输出'
    ],
    howForDrama: [
      '整书拆剧本：将网文直接喂给Claude，生成80集剧情节拍表与卡点清单。',
      '台词人味润色：去除“不仅…而且…”等机械AI痕迹，转为口语化、生活化冲突对白。',
      '人物关系矩阵维护：借助超大上下文记忆全剧80集的人物动机与恩怨纠葛。'
    ],
    tutorialSteps: [
      { step: '01', title: '访问 Claude 平台', desc: '访问 claude.ai 官网。注意该平台对IP纯净度要求极高。' },
      { step: '02', title: '邮箱与短信验证', desc: '使用合规海外邮箱和支持地区的手机号完成首登验证。' },
      { step: '03', title: '建立剧本Project项目', desc: '在Claude Projects中上传世界观文档与角色设定，开启协同创作。' }
    ],
    faqs: [
      { q: 'Claude比ChatGPT更适合写短剧吗？', a: '在情感细腻度、文学文采和长篇记忆连贯性上，Claude具备明显优势；ChatGPT则在结构爽点与高频反转上更直接。' }
    ],
    networkIssues: [
      {
        title: '提示 App unavailable in your country',
        description: 'Anthropic目前仅向特定支持地区提供服务，机房IP或黑名单节点极易被直接封禁。',
        errorCode: 'Geographic Block / 403 Forbidden',
        troubleshoot: [
          '必须使用支持地区的本土高纯净节点，切勿频繁切换不同国家IP。',
          '建议搭配光速云专线方案，选择稳定干净的合规家宽/专线节点访问。'
        ]
      }
    ]
  },
  {
    id: 'gemini',
    slug: 'gemini',
    name: 'Google Gemini',
    category: '多模态与平台',
    company: 'Google',
    tagline: '超大100万Token多模态、视频理解与跨语种剧本转换',
    icon: '🔮',
    officialUrl: 'https://gemini.google.com',
    whatIsIt: 'Gemini 是 Google 推出的原生多模态超级大模型，支持高达100万至200万Token的超大上下文窗口，可以直接读取并分析全长参考视频、音频片段与剧本，实现全链路短剧分析。',
    whatItCanDo: [
      '直接上传参考短剧视频，自动反推镜头运动、光影构图与分镜提示词',
      '一键将中文短剧剧本翻译并本土化为出海短剧（美区/东南亚）剧本',
      '结合Google搜索实时获取当前热门话题与短剧题材灵感'
    ],
    howForDrama: [
      '爆款拆解：把10条高赞短视频丢给Gemini，提炼其开头5秒留存率最高的核心视听元素。',
      '出海短剧改编：保留核心爽点，将国内豪门霸总题材无缝迁移为欧美黑帮狼人/吸血鬼题材。'
    ],
    tutorialSteps: [
      { step: '01', title: '进入 Gemini 门户', desc: '使用已开通服务的 Google 账号访问 gemini.google.com。' },
      { step: '02', title: '多模态文件上传', desc: '直接拖拽短剧参考视频或长篇PDF，开始智能解析。' }
    ],
    faqs: [
      { q: 'Gemini支持中文创作吗？', a: '支持非常优秀，尤其在理解中英双语对白转换时表达地道。' }
    ],
    networkIssues: [
      {
        title: '提示 Gemini is not supported in this region',
        description: 'Google账户与当前网络IP所属区域不匹配或被判定为不可用区域。',
        errorCode: 'Region Not Supported',
        troubleshoot: [
          '保持Google服务专用节点开启，清除浏览器账号登录会话。',
          '通过光速云高速专线优化Google全系服务的连通性。'
        ]
      }
    ]
  },
  {
    id: 'google-ai-studio',
    slug: 'google-ai-studio',
    name: 'Google AI Studio',
    category: '多模态与平台',
    company: 'Google',
    tagline: '免费获取 Gemini 2.5 Flash / Pro 工业级API与剧本批量生成',
    icon: '🔬',
    officialUrl: 'https://aistudio.google.com',
    whatIsIt: 'Google AI Studio 是 Google 官方提供的开发者工作台，提供极高额度的免费 API 调用权限，是影视制作团队搭建内部批量短剧剧本生成工作流的最佳利器。',
    whatItCanDo: [
      '自由调整 Temperature、Top-P 等专业影视创作参数',
      '支持导入数小时视频并秒级提取精确时间轴剧本台词',
      '零成本获取 API Key，对接短剧自动化批量制作系统'
    ],
    howForDrama: [
      '系统Prompt固化：在System Instruction中预置标准短剧分镜协议。',
      '批量跑集数：一次性自动跑完100集的逐场拍摄分镜表。'
    ],
    tutorialSteps: [
      { step: '01', title: '登录 AI Studio', desc: '访问 aistudio.google.com 并点击 Get API Key。' },
      { step: '02', title: '创建新项目并设置参数', desc: '选择 Gemini 2.5 Flash 模型，调整最大上下文窗口。' }
    ],
    faqs: [
      { q: 'AI Studio免费版够用吗？', a: '日常剧本创作与分镜生成完全够用，每分钟限额支持极高吞吐量。' }
    ],
    networkIssues: [
      {
        title: '访问直接卡在空白页或重定向循环',
        description: 'Google开发者平台需要完整的Google服务网络环境支持，网络链路中断会导致握手失败。',
        errorCode: 'Connection Failed / Redirect Loop',
        troubleshoot: [
          '更换为稳定的直连海外专线，避免DNS分流失败。',
          '使用光速云专用节点一键解锁Google生态平台。'
        ]
      }
    ]
  },
  {
    id: 'midjourney',
    slug: 'midjourney',
    name: 'Midjourney',
    category: '图像与分镜',
    company: 'Midjourney Inc.',
    tagline: '角色脸部一致性、绝美光影海报与短剧分镜概念图生成',
    icon: '🎨',
    officialUrl: 'https://midjourney.com',
    whatIsIt: 'Midjourney 是全球艺术审美水准顶尖的AI图像生成工具。在短剧制作中，利用其强大的 `--cref`（角色一致性）和 `--sref`（风格参考）参数，能够轻松产出电影质感的连续画面。',
    whatItCanDo: [
      '短剧主演角色定妆照生成并锁定全剧人脸特征',
      '高燃动作打斗、豪门庄园、赛博都市等复杂宏大场景构建',
      '4K级短剧竖屏先导海报与视觉宣传图设计'
    ],
    howForDrama: [
      '主演锁定：利用 `--cref [主角URL] --cw 80` 保持主角在不同服装和光影下的人脸一致。',
      '竖屏分镜导出：添加 `--ar 9:16` 直接输出短剧竖屏尺寸高清画面。'
    ],
    tutorialSteps: [
      { step: '01', title: '加入官方 Discord 或网页端', desc: '访问 midjourney.com 登录账号。' },
      { step: '02', title: '配置参数与生成', desc: '输入 `/imagine` 或在Web界面批量生成分镜素材。' }
    ],
    faqs: [
      { q: '如何保证每集主角长相不走样？', a: '建立固定的角色参考库URL，并搭配一致的镜头景别词。' }
    ],
    networkIssues: [
      {
        title: 'Discord网络连接断开 / 网页素材加载缓慢',
        description: 'Midjourney的高清图片CDN以及Discord的Websocket长连接在部分网络环境下极易发生频繁丢包。',
        errorCode: 'WebSocket Closed / Media Load Timeout',
        troubleshoot: [
          '需要具备高质量UDP代理和长连接保活特性的网络环境。',
          '使用光速云优化节点即可保障素材秒级加载不卡顿。'
        ]
      }
    ]
  },
  {
    id: 'runway',
    slug: 'runway',
    name: 'Runway Gen-3 Alpha',
    category: 'AI视频生成',
    company: 'Runway ML',
    tagline: '好莱坞级电影运镜、运动笔刷与动态短剧镜头生成',
    icon: '🎬',
    officialUrl: 'https://runwayml.com',
    whatIsIt: 'Runway Gen-3 是当前视频生成领域的工业级标杆工具，提供精细的摄像机控制（平移、推拉、升降、航拍）和运动笔刷（Motion Brush），能将静态分镜变为生动戏剧画面。',
    whatItCanDo: [
      '图生视频（Image-to-Video）：将分镜图无缝转化为5-10秒电影镜头',
      '精确镜头调度：模拟好莱坞轨道推拉与环绕特写',
      '角色细微表情与动态发丝的物理级模拟'
    ],
    howForDrama: [
      '情绪爆发特写：将主演怒视画面的眼眸与呼吸加入动态运动笔刷。',
      '豪车追逐与打斗：通过Camera Control设置高速穿梭镜头。'
    ],
    tutorialSteps: [
      { step: '01', title: '进入 Runway 控制台', desc: '访问 runwayml.com 并登录创作者工作台。' },
      { step: '02', title: '上传首尾帧或关键帧', desc: '使用 Gen-3 Image to Video 模式输入分镜画面。' },
      { step: '03', title: '设置运镜并渲染', desc: '调节摄像机速度与动态权重，点击生成高清短剧片段。' }
    ],
    faqs: [
      { q: '生成的视频动作变形怎么办？', a: '降低动态强度（Motion Scale）至3-5之间，并在提示词中清晰描述运动主体与背景关系。' }
    ],
    networkIssues: [
      {
        title: '高清视频预览一直转圈、下载中断',
        description: '高分辨率视频渲染生成及下载需要极为稳定的带宽吞吐，普通网络极易触发下载超时。',
        errorCode: 'Download Failed / Stream Buffering',
        troubleshoot: [
          '搭配光速云高速IEPL大带宽专线，保障超清短剧视频片段秒速回传与流畅预览。'
        ]
      }
    ]
  },
  {
    id: 'kling',
    slug: 'kling',
    name: '快手可灵 Kling AI',
    category: 'AI视频生成',
    company: 'Kuaishou',
    tagline: '长达10秒高连贯性物理模拟、超逼真肢体动作短剧生成',
    icon: '🚀',
    officialUrl: 'https://klingai.com',
    whatIsIt: '可灵 Kling AI 拥有强大的物理世界模拟能力和长达10秒的连续动作生成能力，能够处理大幅度人物动作、复杂走位和精细面部表情，是国产与出海短剧制作的热门核心工具。',
    whatItCanDo: [
      '生成单段长达10秒的高连贯性短剧镜头',
      '复杂大动作交互：拥抱、挥手、奔跑与交谈',
      '首尾帧过渡自然，轻松实现长镜头无缝串联'
    ],
    howForDrama: [
      '连续对话镜头：让男女主角在5-10秒内完成眼神交汇与情绪渐进。',
      '打斗动作戏：利用可灵的物理引擎呈现更真实的拳脚与光效碰撞。'
    ],
    tutorialSteps: [
      { step: '01', title: '进入可灵平台', desc: '访问 klingai.com 或国内版/国际版。' },
      { step: '02', title: '选择专业模式', desc: '上传短剧主角肖像或关键分镜，开启大师级运镜。' }
    ],
    faqs: [
      { q: '国际版与国内版账号互通吗？', a: '不互通，海外发行业务通常使用国际版 Kling AI 进行全球资产管理。' }
    ],
    networkIssues: [
      {
        title: '海外版无法访问或生成任务排队超时',
        description: '访问国际版时跨洲网络延迟过高可能造成通信中断。',
        errorCode: 'Request Timeout / Gateway Error',
        troubleshoot: [
          '通过光速云优化跨境路由，确保与国际集群通信毫秒级稳定。'
        ]
      }
    ]
  },
  {
    id: 'veo',
    slug: 'veo',
    name: 'Google Veo',
    category: 'AI视频生成',
    company: 'Google DeepMind',
    tagline: '超高清1080P/4K电影级视效、语义物理深度理解',
    icon: '🌟',
    officialUrl: 'https://deepmind.google/technologies/veo/',
    whatIsIt: 'Veo 是 Google DeepMind 开发的高级生成式视频模型，能够深入理解电影术语（如延时摄影、航拍航迹、特定镜头焦段），生成画质极其扎实、画面噪点极低的短剧素材。',
    whatItCanDo: [
      '高保真电影质感与逼真光影折射',
      '理解复杂的影视导演指令与多主体互动',
      '支持短剧特效合成与超现实视觉场景'
    ],
    howForDrama: [
      '科幻与修仙视效：生成诸如飞剑破空、巨型战舰折跃等顶级视觉大场面。',
      '环境氛围烘托：阴雨街头、霓虹倒影等微电影级艺术空镜头。'
    ],
    tutorialSteps: [
      { step: '01', title: '加入 VideoFX / Workspace', desc: '通过 Google Labs 获得内测资格。' },
      { step: '02', title: '输入专业导演Prompt', desc: '指定电影镜头规格、胶片色彩方案并开始合成。' }
    ],
    faqs: [
      { q: 'Veo画质比其他工具好在哪里？', a: '在细节纹理、动态模糊自然度和光影连续性上具备学术级的扎实表现。' }
    ],
    networkIssues: [
      {
        title: '提示 Not Available in your Country',
        description: 'Google Labs测试产品对IP与地区要求极严，绝大多数普通节点直接被阻断。',
        errorCode: 'Region Restricted',
        troubleshoot: [
          '配合光速云专线方案，选择纯净合规的指定地区节点参与测试。'
        ]
      }
    ]
  },
  {
    id: 'sora',
    slug: 'sora',
    name: 'OpenAI Sora',
    category: 'AI视频生成',
    company: 'OpenAI',
    tagline: '突破物理时空极限的世界模型、革命性一键生成短剧整幕',
    icon: '🔥',
    officialUrl: 'https://openai.com/sora',
    whatIsIt: 'Sora 是 OpenAI 划时代的视频生成模型，被誉为“物理世界模拟器”。它能在保持三维几何一致性与物理规律的前提下，生成单段长达60秒的高清视频，彻底颠覆传统短剧制作周期。',
    whatItCanDo: [
      '单次生成长达数十秒的完整剧情段落与长镜头',
      '多角度同一场景机位自由切换',
      '逼真的流体、光斑、肌肉运动与复杂群演模拟'
    ],
    howForDrama: [
      '一镜到底大结局：输入核心冲突Prompt，一键生成跌宕起伏的终局长镜头。',
      '降本增效90%：无需庞大剧组、无需昂贵场地租赁，一人即可创作电影级微短剧。'
    ],
    tutorialSteps: [
      { step: '01', title: '访问 OpenAI Sora 门户', desc: '登录官方平台获取测试与创作入口。' },
      { step: '02', title: '编写导演级叙事Prompt', desc: '描述故事背景、角色情感推进、光线渐变与摄影机轨迹。' }
    ],
    faqs: [
      { q: 'Sora生成的短剧可以直接商用上线吗？', a: '生成素材具有超高清晰度与完整版权合规性，非常适合作为黄果短剧专区精品剧上线。' }
    ],
    networkIssues: [
      {
        title: '提示 403 Forbidden / Access Denied / Connection Timeout',
        description: '作为最受全球瞩目的前沿算力产品，其API与网关具备严苛的防刷和区域封控规则。',
        errorCode: 'Security Challenge Failed / 403',
        troubleshoot: [
          '杜绝使用公共免费代理或高污染机房IP。',
          '使用光速云企业级专线与高质量加密通道，保障连接顺畅不掉线。'
        ]
      }
    ]
  }
];
