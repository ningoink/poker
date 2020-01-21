import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const DiamondCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Diamonds,
    coder: "多萝西·沃恩",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Dorothy_Vaughan.png",
    milestone: [
      { year: 1943, event: "计算出了美国太空计划的飞行轨迹" },
      { year: 1961, event: "教员工行 FORTRAN 编程" },
    ],
    quote: "I Changed What I could, and what I couldn't, I endured."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Diamonds,
    coder: "帕瑞萨·大不里士",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Parisa_Tabriz.jpg",
    milestone: [
      { year: 2016, event: "监督 Google Chrome 的安全性" },
      { year: 2018, event: "成立了安全倡导者会议" },
    ],
    quote: "It's often harder to consistently write secure code than it is to point out insecure code."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Diamonds,
    coder: "松本行弘",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Yukihiro_Matsumoto.jpeg",
    milestone: [
      { year: 1995, event: "设计了 Ruby 语言" },
    ],
    quote: "I believe consistency and orthogonality are tools of design, not the primary goal in design."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Diamonds,
    coder: "史蒂芬·沃尔夫勒姆",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Stephen_Wolfram.jpg",
    milestone: [
      { year: 1986, event: "开发了计算机代数系统 Mathematica" },
      { year: 1988, event: "开发了应答引擎 Wolfram Alpha" },
    ],
    quote: "Could it be that some place out there in the computational universe, we might find our physical universe?"
  },
  {
    key: CardKey.Five,
    type: CardSuit.Diamonds,
    coder: "阿列克谢·帕基特诺夫",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Alexey_Pajitnov.jpg",
    milestone: [
      { year: 1984, event: "设计并开发了俄罗斯方块" },
    ],
    quote: "Tetris had a very important role in breaking down ordinary people's inhibitions in front of computers."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Diamonds,
    coder: "菲尔·齐默尔曼",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Phil_Zimmermann.jpg",
    milestone: [
      { year: 1991, event: "创建了公共密钥加密程序 Pretty Good Privacy" },
    ],
    quote: "If privacy is outlawed, only outlaws will have privacy."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Diamonds,
    coder: "拉迪亚·珀尔曼",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Radia_Perlman.jpg",
    milestone: [
      { year: 1985, event: "设计了以太网的生成树协议" },
    ],
    quote: "Start out with finding the right problem to solve."
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Diamonds,
    coder: "姚期智",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Andrew_Yao.jpeg",
    milestone: [
      { year: 1997, event: "用极小定理提出姚的极小极大原理" },
      { year: 1979, event: "引入通信复杂性理论" },
      { year: 1982, event: "提出了姚的百万富翁问题" },
    ],
    quote: "If you have something in mind, go ahead with it. Even if you don't make it to the end, you may yet make it further than others."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Diamonds,
    coder: "温特·瑟夫 & 鲍勃·卡恩",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Vint_Cerf_And_Bob_Kahn.png",
    milestone: [
      { year: 1983, event: "发明了传输控制协议" },
      { year: 1983, event: "发明了互联网协议" },
    ],
    quote: "You don't have to be young to learrn about technology. You have to feel young. - Vint Cerf"
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Diamonds,
    coder: "艾伦·凯",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Alan_Kay.png",
    milestone: [
      { year: 1970, event: "率先使用了面向对象程序设计" },
    ],
    quote: "The best way to predict the future is to invent it."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Diamonds,
    coder: "玛格丽特·汉密尔顿",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Margaret_Hamilton.jpg",
    milestone: [
      { year: 1969, event: "负责阿波罗登月任务的软件开发" },
    ],
    quote: "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Diamonds,
    coder: "让·萨米特",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Jean_E._Sammet.png",
    milestone: [
      { year: 1959, event: "合作开发了 COBOL 语言" },
      { year: 1962, event: "开发了 FORMAC 语言" },
    ],
    quote: "At that point...there was relatively little discrimination against women because programmers were very scarce. And so it didn't matter whether you had three heads."
  },
  {
    key: CardKey.King,
    type: CardSuit.Diamonds,
    coder: "维拉·莫尔纳",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Vera_Molnar.png",
    milestone: [
      { year: 1959, event: "开始迭代组合图像" },
      { year: 1968, event: "开始基于几何形状和主题创建算法绘画" },
    ],
    quote: "The machine, which is thought to be cold and inhuman, can help to realize what is most profound in a human being."
  },
]

export default DiamondCards