// 《奶蛙梦游记》的台词和文字。改台词只改这个文件。
// 故事：语文课讲《庄周梦蝶》，奶蛙听着听着睡着了，一头栽进梦里。梦有三种，每 30 秒换一种，越做越深：
//   庄周梦蝶（塔防）→ 赛博西游·三打白骨精（护送唐僧）→ 堂吉诃奶蛙大战风车（跑酷）→ 再回到庄周梦蝶（更深一层）……
// 说话人：naiwa 奶蛙、teacher 语文老师、tang 唐僧（牛来）、wukong 孙悟空（画外音）、sha 沙僧、penguin 高雅企鹅、
//         quixote 堂吉诃奶蛙（奶蛙自己）、sancho 桑丘、narrator 旁白（没有头像）

export const PEOPLE = {
  naiwa: { name: '奶蛙', img: 'assets/img/naiwa-belly-laugh.gif' },
  teacher: { name: '语文老师', img: null },
  tang: { name: '唐僧（牛来）', img: null },
  wukong: { name: '孙悟空（画外音）', img: null },
  sha: { name: '沙僧（蓝色大肥鱼）', img: null },
  penguin: { name: '高雅企鹅', img: null },
  quixote: { name: '堂吉诃奶蛙', img: 'assets/img/naiwa-belly-laugh.gif' },
  sancho: { name: '桑丘（小黄鸭）', img: null },
  narrator: { name: '', img: null },
};

// 三个梦境。rule 是换梦时标题卡下面那行字，goal 是左上角的目标
export const DREAMS = [
  { key: 'butterfly', icon: '🦋', name: '庄周梦蝶', mode: '塔防', glyph: '哈',
    rule: '高雅企鹅想把睡觉的奶蛙吵醒！捧腹大笑放出蝴蝶，打爆它们的高雅塔', laugh: '蝴蝶笑' },
  { key: 'xiyou', icon: '🐒', name: '赛博西游 · 三打白骨精', mode: '护送', glyph: '嘿',
    rule: '七十二变！一起喷“嘿”，护住唐僧（牛来）；白骨精会变成路人，别喷错良民', laugh: '分身笑' },
  { key: 'quixote', icon: '🌀', name: '堂吉诃奶蛙大战风车', mode: '跑酷', glyph: '呼',
    rule: '风车巨人跑了！一路追，喷“呼”吹龙卷风；空格 / 「跳」跳过障碍，「开船」往后喷一口往前冲', laugh: '龙卷笑' },
];

// 开场：黑板上的字（一个字一个字写出来）
export const CLASS_BOARD = ['第三节　语文', '《庄子·齐物论》', '昔者庄周梦为胡蝶，', '栩栩然胡蝶也……'];
export const INTRO_LINES = [
  ['teacher', '昔者庄周梦为胡蝶，栩栩然胡蝶也……'],
  ['naiwa', '（呼……呼……）'],
];

// 每个梦境里按时间（秒）出的喊话。first：只在第一次进这个梦时出（教玩法）
export const DREAM_LINES = {
  0: [
    { t: 0.8, who: 'naiwa', text: '这是哪？我……变成蝴蝶了？还是蝴蝶变成我了？', first: true },
    { t: 3.2, who: 'penguin', text: 'Shhh! 这么高雅的梦，不许笑！' },
    { t: 6.5, who: 'naiwa', text: '它们要戳我的鼻涕泡！按「变身」捧腹大笑，放蝴蝶打它们的塔！', first: true },
    { t: 14, who: 'penguin', text: 'How elegant. 优雅，永不过时。' },
    { t: 22, who: 'naiwa', text: '塔一倒它们就跳舞……这就是高雅吗？' },
  ],
  1: [
    { t: 0.4, who: 'naiwa', text: '赛博……西天？唐僧怎么是头牛？', first: true },
    { t: 3.0, who: 'tang', text: '妈妈！（翻译：悟空，有妖怪）', voice: 'tang.mama' },
    { t: 5.6, who: 'sha', text: '我是吃白饭的，蓝色大肥鱼～今天演沙僧。', first: true, voice: 'whale.baifan' },
    { t: 9.5, who: 'wukong', text: '白骨精会变成村姑、老太太、老头，穿帮之前看着跟路人一样！', first: true },
    { t: 17, who: 'naiwa', text: '喷错良民，师父就念紧箍咒……紧箍咒怎么也是“妈妈”？' },
    { t: 25, who: 'wukong', text: '笑得太狠了……地面要裂开了！' },
  ],
  2: [
    { t: 0.4, who: 'quixote', text: '看！巨人！为了杜尔西内娅，冲啊！', first: true },
    { t: 3.5, who: 'sancho', text: '老爷，那是风车啊！风车怎么还长了腿？！' },
    { t: 7, who: 'quixote', text: '喷“呼”能吹出龙卷风！往后喷一口能“开船”，冲得更快！', first: true },
    { t: 15, who: 'sancho', text: '前面那群羊不是敌军！是羊！' },
    { t: 23, who: 'quixote', text: '就差一点……再笑大声一点！' },
  ],
};

// 换梦时的过场字幕
export const SHIFT_TEXT = {
  sneeze: ['啊……啊……', '阿——嚏！！'],
  quake: ['笑到地震！', '地面裂开了——掉进下一层梦！'],
  gust: ['风车扇了一大口风……', '呼——吹回了庄周的梦里'],
};

// 各种梗台词
export const LINES = {
  towerDown: ['高雅塔倒了！', '塔都倒了，跳个舞先', '优雅地塌了'],
  dance: ['Shall we dance?', '优雅，永不过时', '跳就完了', '这就是高雅'],
  bubbleLow: '鼻涕泡快被戳破了！别让它们吵醒奶蛙！',
  bubblePop: '鼻涕泡破了！被高雅吵醒了……一半笑点掉了！',
  mama: ['妈妈！', '妈妈！！', '妈——妈——', '妈妈！妈妈！'],
  kidnap: '大师兄，师父被妖怪抓走了！',
  rescue: '师父，俺老孙来也！',
  boneIn: ['女施主……（唐僧走过去了）', '有人送斋饭来了？', '这老人家看着挺面善……'],
  boneReveal: ['妖精，哪里跑！', '吃俺老孙一棒！', '火眼金睛，看穿了！'],
  headband: '唐僧念紧箍咒：妈妈妈妈妈妈～',
  wrongHit: ['我是良民！', '喷错人了！', '良民也挨喷？'],
  millHit: ['咚！', '巨人受伤了！', '风车转晕了'],
  millCatch: '被风车叶子挑起来了！转——转——转——',
  millDown: '风车巨人被笑倒了！',
  millAway: '风车巨人跑没影了……',
  stumble: ['哎哟！', '绊了一跤', '干草堆！'],
  awkward: ['……冷场了', '尬住了', '空气突然安静'],
};

// 升级时三选一：每个技能配一句笑话（卡片上的小字）
export const JOKES = {
  chord: '一个“哈”不够，三个“哈”才叫笑。',
  echo: '笑声会从背后传回来。',
  sustain: '这个笑话能穿透所有人的防线。',
  forte: '笑得整栋教学楼都听见。',
  arpeggio: '一个人笑，传给下一个人笑。',
  presto: '憋不住了，越笑越快。',
  drum: '笑得直拍桌子。',
  orbit: '笑声围着你转圈圈。',
  stride: '笑着跑，跑得快。',
  hymn: '笑一笑，十年少。',
};

// 醒来：最后的评价（“从夯到拉”五档）
export const RANKS = [
  [30000, '夯'], [16000, '顶级'], [8000, '人上人'], [3000, 'NPC'], [0, '拉完了'],
];
export const WAKE_LINES = [
  ['teacher', '奶蛙！下课了还睡！你来说说，庄周梦蝶，讲的是什么？'],
  ['naiwa', '不知周之梦为胡蝶与，胡蝶之梦为周与……还是，奶蛙之梦为牛来与？'],
];
