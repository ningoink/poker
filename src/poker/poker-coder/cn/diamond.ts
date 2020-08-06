import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const DiamondCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Diamonds,
    coder: "多萝西·沃恩",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "dorothy_vaughan.png",
    milestone: [
      { year: 1943, event: "计算出了美国太空计划的飞行轨迹" },
      { year: 1961, event: "教员工行 FORTRAN 编程" },
    ],
    quote: "我改变了我所能做的，并克服了做不了的。"
  },
  {
    key: CardKey.Two,
    type: CardSuit.Diamonds,
    coder: "帕瑞萨·大不里士",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "parisa_tabriz.jpg",
    milestone: [
      { year: 2016, event: "监督 Google Chrome 的安全性" },
      { year: 2018, event: "成立了安全倡导者会议" },
    ],
    quote: "始终如一地编写安全代码要比指出不安全代码要困难得多。"
  },
  {
    key: CardKey.Three,
    type: CardSuit.Diamonds,
    coder: "松本行弘",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "yukihiro_matsumoto.jpeg",
    milestone: [
      { year: 1995, event: "设计了 Ruby 语言" },
    ],
    quote: "我相信一致性和正交性是设计的工具，而不是设计的主要目标。"
  },
  {
    key: CardKey.Four,
    type: CardSuit.Diamonds,
    coder: "史蒂芬·沃尔夫勒姆",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "stephen_wolfram.jpg",
    milestone: [
      { year: 1986, event: "开发了计算机代数系统 Mathematica" },
      { year: 1988, event: "开发了应答引擎 Wolfram Alpha" },
    ],
    quote: "在计算宇宙中的某个地方，可能存在着我们生存的这个物理宇宙吗？"
  },
  {
    key: CardKey.Five,
    type: CardSuit.Diamonds,
    coder: "阿列克谢·帕基特诺夫",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "alexey_pajitnov.jpg",
    milestone: [
      { year: 1984, event: "设计并开发了俄罗斯方块" },
    ],
    quote: "俄罗斯方块在打破普通人在计算机面前的束缚方面起着非常重要的作用。"
  },
  {
    key: CardKey.Six,
    type: CardSuit.Diamonds,
    coder: "菲尔·齐默尔曼",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "phil_zimmermann.jpg",
    milestone: [
      { year: 1991, event: "创建了公共密钥加密程序 Pretty Good Privacy" },
    ],
    quote: "如果隐私权被禁止，那只有非法者才具有隐私权。"
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Diamonds,
    coder: "拉迪亚·珀尔曼",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "radia_perlman.jpg",
    milestone: [
      { year: 1985, event: "设计了以太网的生成树协议" },
    ],
    quote: "从找到正确的问题开始解决问题。"
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Diamonds,
    coder: "姚期智",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "andrew_yao.jpeg",
    milestone: [
      { year: 1997, event: "用极小定理提出姚的极小极大原理" },
      { year: 1979, event: "引入通信复杂性理论" },
      { year: 1982, event: "提出了姚的百万富翁问题" },
    ],
    quote: "如果你有什么想法，请继续进行。即使你没有做到最后，也可能会比其他人做得更好。"
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Diamonds,
    coder: "温特·瑟夫 & 鲍勃·卡恩",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "vint_cerf_and_bob_kahn.png",
    milestone: [
      { year: 1983, event: "发明了传输控制协议" },
      { year: 1983, event: "发明了互联网协议" },
    ],
    quote: "学习技术无关年龄，但你的心态必须年轻。 - 温特·瑟夫"
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Diamonds,
    coder: "艾伦·凯",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "alan_kay.png",
    milestone: [
      { year: 1970, event: "率先使用了面向对象程序设计" },
    ],
    quote: "预测未来的最好方法是引领未来。"
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Diamonds,
    coder: "玛格丽特·汉密尔顿",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "margaret_hamilton.jpg",
    milestone: [
      { year: 1969, event: "负责阿波罗登月任务的软件开发" },
    ],
    quote: "回顾过去，我们是世界上最幸运的人。我们别无选择，只能奋勇直上。"
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Diamonds,
    coder: "让·萨米特",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "jean_e_sammet.png",
    milestone: [
      { year: 1959, event: "合作开发了 COBOL 语言" },
      { year: 1962, event: "开发了 FORMAC 语言" },
    ],
    quote: "那时……由于程序员非常稀少，对女性的歧视相对较少。 因此，你是否拥有三个头都没关系。"
  },
  {
    key: CardKey.King,
    type: CardSuit.Diamonds,
    coder: "维拉·莫尔纳",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "vera_molnar.png",
    milestone: [
      { year: 1959, event: "开始迭代组合图像" },
      { year: 1968, event: "开始基于几何形状和主题创建算法绘画" },
    ],
    quote: "机器被认为是冷的和不人道的，但可以帮助人类探索最深奥的东西。"
  },
]

export default DiamondCards
