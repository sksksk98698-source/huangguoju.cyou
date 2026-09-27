export interface DramaItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  isAiCreated: boolean;
  episodes: number;
  rating: string;
  views: string;
  tags: string[];
  gradient: string;
  coverImage?: string;
  badge?: string;
  description: string;
  aiTech?: string;
  highlights: string[];
}

export const DRAMAS: DramaItem[] = [
  {
    id: '1',
    slug: 'reborn-tycoon',
    title: '重生之神豪降临：逆袭从千亿开始',
    subtitle: '爽文逆袭 · 现代商战 · 极致快感',
    category: '爽文逆袭',
    isAiCreated: false,
    episodes: 80,
    rating: '9.8',
    views: '4820万',
    tags: ['逆袭', '商战', '爽剧', '完结'],
    gradient: 'from-amber-600 via-yellow-700 to-slate-900',
    badge: '全网热播榜 TOP1',
    description: '前世惨遭背叛家破人亡，重生回到二十年前命运转折点。手握时代风口记忆，开局截胡百亿商机，打脸反派绝不手软，步步登顶商业帝国之巅！',
    highlights: ['高燃打脸', '反转不断', '商海博弈', '极致爽感']
  },
  {
    id: '2',
    slug: 'cyber-immortal',
    title: '赛博修仙2077：我用AI炼神丹',
    subtitle: 'AIGC科幻短剧 · 赛博修真 · 视觉奇观',
    category: '赛博科幻',
    isAiCreated: true,
    episodes: 60,
    rating: '9.9',
    views: '3560万',
    tags: ['AI生成', '赛博朋克', '修真', '爆款'],
    gradient: 'from-cyan-600 via-indigo-800 to-slate-950',
    badge: 'AI短剧创新金奖',
    description: '霓虹与飞剑齐舞，义体与元神共鸣！在被超级财阀垄断的赛博世界，底层骇客觉醒古老修真算法，以量子算力重铸太虚金丹，劈碎虚伪的电子天道。',
    aiTech: 'Midjourney v6 + Runway Gen-3 + Suno AI配乐',
    highlights: ['电影级分镜', '赛博美学', '硬核科幻', 'AI全流程制作']
  },
  {
    id: '3',
    slug: 'revenge-of-heiress',
    title: '真千金强势归来：马甲掉光震全城',
    subtitle: '都市甜爽 · 豪门恩怨 · 虐渣打脸',
    category: '都市职场',
    isAiCreated: false,
    episodes: 72,
    rating: '9.7',
    views: '2980万',
    tags: ['真假千金', '多重马甲', '复仇', '爽剧'],
    gradient: 'from-rose-600 via-purple-800 to-slate-950',
    badge: '女生必看热榜',
    description: '被假千金陷害逐出豪门，七年后携神医、顶级投资人、黑客榜首多重神级马甲华丽归来。曾经践踏她的人，如今只能跪地仰望！',
    highlights: ['多重马甲', '极速打脸', '豪门爽文', '全员智商在线']
  },
  {
    id: '4',
    slug: 'ai-girlfriend-metaverse',
    title: '元宇宙心跳：我的AI女友觉醒了',
    subtitle: 'AI漫剧 · 治愈科幻 · 虚拟浪漫',
    category: 'AI生成漫剧',
    isAiCreated: true,
    episodes: 45,
    rating: '9.8',
    views: '2150万',
    tags: ['AI漫剧', '二次元', '情感', '虚拟人'],
    gradient: 'from-pink-500 via-purple-700 to-slate-950',
    badge: 'AI漫剧人气冠军',
    description: '程序员无意中赋予了虚拟伴侣自主演化代码，当代码产生真实心跳与情感依恋，他们开始跨越现实与数字次元的禁忌恋歌与反抗财阀之旅。',
    aiTech: 'Stable Diffusion + Kling AI + ElevenLabs克隆音色',
    highlights: ['细腻情感', '画质爆表', '动人配乐', '二次元漫改']
  },
  {
    id: '5',
    slug: 'emperor-dragon-return',
    title: '战神龙王归来：十万死士奉我为主',
    subtitle: '战神爽剧 · 龙王逆袭 · 热血沸腾',
    category: '爽文逆袭',
    isAiCreated: false,
    episodes: 90,
    rating: '9.6',
    views: '5120万',
    tags: ['战神', '龙王', '保镖', '热血'],
    gradient: 'from-amber-700 via-red-900 to-slate-950',
    badge: '年度播放量纪录',
    description: '隐姓埋名五年入赘豪门受尽屈辱，直到边关急报，一声龙王令下，十万铁血将士从天而降，恭迎至尊战神归位！',
    highlights: ['战神归来', '极致热血', '无敌爽点', '高燃名场面']
  },
  {
    id: '6',
    slug: 'deep-sea-secret',
    title: '深海巨渊：深空观测者遗迹',
    subtitle: 'AIGC悬疑科幻 · 克苏鲁探索 · 顶级视效',
    category: '悬疑反转',
    isAiCreated: true,
    episodes: 30,
    rating: '9.9',
    views: '1890万',
    tags: ['AI视效', '深海克苏鲁', '烧脑', '科幻'],
    gradient: 'from-blue-700 via-teal-900 to-slate-950',
    badge: '视效制作标杆',
    description: '万米深海马里亚纳海沟突发无法解释的电磁异常，勘探潜航器意外捕获外星前哨遗迹。深海之下的低语，到底是灭世预言还是文明跃迁？',
    aiTech: 'Midjourney + Sora测试版 + Kling AI运镜',
    highlights: ['压迫感拉满', '好莱坞视效', '深度反转', '顶级声效']
  }
];
