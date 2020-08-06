import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const ClubCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Clubs,
    coder: "艾达·罗兹",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "ida_rhodes.jpeg",
    milestone: [
      { year: 1940, event: "从事于“数学表项目”" },
      { year: 1950, event: "和 Betty Holberton 一起为 UNIVAC-I 设计了 C-10 语言" },
    ],
    quote: "每当有人阅读科幻小说时，我会因自己有实际经验而默默地激动。"
  },
  {
    key: CardKey.Two,
    type: CardSuit.Clubs,
    coder: "布莱姆·科亨",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "bram_cohen.jpg",
    milestone: [
      { year: 2002, event: "创造了 BitTorrent 对等协议" },
    ],
    quote: "人们会对工作白忙活而感到身心疲惫，而我只会做一些人们会实际使用的东西。"
  },
  {
    key: CardKey.Three,
    type: CardSuit.Clubs,
    coder: "布兰登·艾克",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "brendan_eich.jpg",
    milestone: [
      { year: 1995, event: "创造了 JavaScript 语言" },
    ],
    quote: "如果网络可以发展为分析出缺少的 API 并具有更好的性能，则开发人员将无需工作在网络之外。"
  },
  {
    key: CardKey.Four,
    type: CardSuit.Clubs,
    coder: "索菲·威尔逊",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "sophie_wilson.jpg",
    milestone: [
      { year: 1978, event: "设计了橡子微型计算机" },
      { year: 1981, event: "开发了 BBC Basic 语言" },
    ],
    quote: "我是那种会直接表明解决方案有多明显的少数工程师，这使我成为从事 IT 工作的危险人物，但我却是一个有用的人。"
  },
  {
    key: CardKey.Five,
    type: CardSuit.Clubs,
    coder: "詹姆斯·高斯林",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "james_gosling.jpg",
    milestone: [
      { year: 1995, event: "创造了 Java 语言" },
    ],
    quote: "人们将安全性视为一个可购买的名词，但实际上这是一个像幸福一样地抽象概念。"
  },
  {
    key: CardKey.Six,
    type: CardSuit.Clubs,
    coder: "比尔·乔伊",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "bill_joy.jpg",
    milestone: [
      { year: 1976, event: "创造了 VI 编辑器" },
      { year: 1978, event: "创造了 Unix 下的 C Shell" },
    ],
    quote: "我们必须鼓励我们想要的未来，而不是试图防止陷入对未来战争的恐惧。"
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Clubs,
    coder: "斯蒂夫·沃兹尼亚克",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "steve_wozniak.jpg",
    milestone: [
      { year: 1977, event: "设计了第一台大众市场的微型计算机 Apple II" },
      { year: 1987, event: "发明了通用遥控器" },
    ],
    quote: "最后，我希望会在某处说明我设计的是一台好的计算机。"
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Clubs,
    coder: "沃德·克莉史汀森",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "ward_christensen.jpg",
    milestone: [
      { year: 1977, event: "开发了一种简单的文件传输协议 XMODEM" },
      { year: 1978, event: "第一个公告板 CBBS 共同创始人" },
    ],
    quote: "我根据软木板和图钉类型的公告板来设计软件，并创造了术语“BBS”。"
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Clubs,
    coder: "丹尼斯·里奇",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "dennis_ritchie.jpg",
    milestone: [
      { year: 1970, event: "合作创建了 Unix 操作系统" },
      { year: 1978, event: "设计了 C 语言" },
    ],
    quote: "Unix 基本上是一个简单的操作系统，但是你必须是个天才才能真正理解它的简单性。"
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Clubs,
    coder: "达娜",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "dana_ulery.jpg",
    milestone: [
      { year: 1961, event: "早期的科学计算应用先锋" },
      { year: 1971, event: "建立了电子数据交换标准" },
    ],
    quote: "知识管理首先是要利用信息来提出正确的问题，这本身就是一个巨大且通常是无法识别的挑战。"
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Clubs,
    coder: "法兰·艾伦",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "frances_allen.jpg",
    milestone: [
      { year: 1962, event: "为最早的超级计算机之一 IBM Stretch 设计了编译器" },
    ],
    quote: "一个非常重要的步骤不仅是确定出并行性，而且是确定出有用的并行性。"
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Clubs,
    coder: "马文·李·明斯基",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "marvin_minsky.jpg",
    milestone: [
      { year: 1951, event: "发明了神经网络和第一台自学机器" },
      { year: 1963, event: "发明了第一台头戴式图形显示器" },
    ],
    quote: "计算机并不会意识到自己在做什么，但其实大多数情况下，我们人类也一样。"
  },
  {
    key: CardKey.King,
    type: CardSuit.Clubs,
    coder: "艾伦·图灵",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "alan_kay.png",
    milestone: [
      { year: 1936, event: "发明了图灵机" },
      { year: 1939, event: "开发出可以破解纳粹加密的计算机" },
      { year: 1950, event: "发明了图灵测试" },
    ],
    quote: "我们只能看到前方很短的距离，但是我们可以看到那里还有很多工作要做。"
  },
]

export default ClubCards
