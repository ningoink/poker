import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const HeartCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Hearts,
    coder: "格蕾丝·赫柏",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "grace_hopper.jpg",
    milestone: [
      { year: 1945, event: "首创术语“bug”" },
      { year: 1952, event: "发明了编译器" },
      { year: 1959, event: "合作开发了 COBOL" },
    ],
    quote: "当我们需要更强的计算能力时，解决方法不应是获得一个更厉害的计算机，而是构建一个多计算机系统并能并行操作它们。"
  },
  {
    key: CardKey.Two,
    type: CardSuit.Hearts,
    coder: "吴恩达",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "andrew_ng.jpg",
    milestone: [
      { year: 2007, event: "领导斯坦福人工智能机器人项目" },
      { year: 2008, event: "领导斯坦福自治直升机项目" },
      { year: 2011, event: "上线线上机器学习课程" },
    ],
    quote: "今天，我实际上很难想到一个未来几年内不会被 AI 改变的行业。"
  },
  {
    key: CardKey.Three,
    type: CardSuit.Hearts,
    coder: "余国荔",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "corrinne_yu.jpg",
    milestone: [
      { year: 1990, event: "为美国航天飞机计划编写代码" },
      { year: 1994, event: "为自己创建了 3D 图形引擎" },
      { year: 2008, event: "领导 Halo 游戏系列的开发" },
    ],
    quote: "我常常会抱紧我的代码——我会抓取一些代码输出日志，用几本书围着自己，握住合适的垫子，卷着毯子躺在沙发上，开始阅读和涂鸦。"
  },
  {
    key: CardKey.Four,
    type: CardSuit.Hearts,
    coder: "布赖恩·福克斯",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "brian_fox.png",
    milestone: [
      { year: 1989, event: "创造了 GNU 的 Bash Shell" },
      { year: 2008, event: "合作开发了 OVC 开源投票系统" },
    ],
    quote: "我会尽量不去为了工作而工作，而会试图专注于思考我为什么要做这件事，这样才能在完成工作后体会到满足感。"
  },
  {
    key: CardKey.Five,
    type: CardSuit.Hearts,
    coder: "吉多·范罗苏姆",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "guido_van_rossum.jpg",
    milestone: [
      { year: 1990, event: "创造了 Python 语言" },
    ],
    quote: "Python 是程序员需要多少自由度的实验。自由度太大，没有人可以阅读别人的代码；太少了，表现力受到了威胁。"
  },
  {
    key: CardKey.Six,
    type: CardSuit.Hearts,
    coder: "拉里·沃尔",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "larry_wall.jpg",
    milestone: [
      { year: 1985, event: "创建了 Git 的前身 Patch" },
      { year: 1987, event: "创建了 Perl 语言" },
    ],
    quote: "我设法运行此开源项目的唯一原因是，我学会了将委托委派给其他人。"
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Hearts,
    coder: "鲍勃·弗兰克斯顿＆丹·布里克林",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "dan_bricklin_and_bob_frankston.jpg",
    milestone: [
      { year: 1979, event: "创造了第一个电子表格程序 VisiCalc" },
    ],
    quote: "在一个好的系统中，只要做平常会帮助自己的事情，就会对每个人都有帮助。——丹·布里克林"
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Hearts,
    coder: "阿黛尔·戈德堡",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "adele_goldberg.jpg",
    milestone: [
      { year: 1973, event: "提出用于图形用户界面的概念" },
      { year: 1980, event: "合作开发了 Smalltalk-80 语言" },
    ],
    quote: "不要问你是否可以做某事，请直接思考要怎么做。"
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Hearts,
    coder: "布莱恩·柯林汉",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "brian_kernighan.png",
    milestone: [
      { year: 1970, event: "合作开发了 Unix 操作系统" },
      { year: 1972, event: "编写了第一个 “Hello World” 程序" },
      { year: 1977, event: "合作发明了 Awk 语言" },
    ],
    quote: "不要过多议论错误的代码，请重写它。"
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Hearts,
    coder: "高德纳",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "donald_knuth.jpg",
    milestone: [
      { year: 1973, event: "出版了《计算机编程艺术》" },
      { year: 1978, event: "设计了 TeX 类型设置系统" },
    ],
    quote: "科学是我们足够了解并能解释给计算机的知识，艺术是剩下能做的一切。"
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Hearts,
    coder: "朱迪亚·珀尔",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "judea_pearl.png",
    milestone: [
      { year: 1970, event: "创建了人工智能的概率方法" },
      { year: 1985, event: "发明了贝叶斯网络" },
    ],
    quote: "最可靠的知识需要你的亲自构建。"
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Hearts,
    coder: "约翰·麦卡锡",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "john_mc_carthy.jpg",
    milestone: [
      { year: 1955, event: "提出了术语“人工智能”" },
      { year: 1958, event: "创建了 Lisp 语言" },
    ],
    quote: "每个人都需要拥有编程思维，这将会是我们与计算机说话的方式。"
  },
  {
    key: CardKey.King,
    type: CardSuit.Hearts,
    coder: "莫里斯·威尔克斯",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "maurice_wilkes.png",
    milestone: [
      { year: 1949, event: "打造了第一台具有内部存储程序的计算机 EDSAC" },
    ],
    quote: "我一生中的大部分时间都将花在寻找自己程序中的错误上。"
  },
]

export default HeartCards
