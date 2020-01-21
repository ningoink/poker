import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const ClubCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Clubs,
    coder: "艾达·罗兹",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Ida_Rhodes.jpeg",
    milestone: [
      { year: 1940, event: "从事于“数学表项目”" },
      { year: 1950, event: "和 Betty Holberton 一起为 UNIVAC-I 设计了 C-10 语言" },
    ],
    quote: "Whenever I see anyone reading a copy of Science Fiction, I gloat silently over the fact that I get my thrills not vicariously but through actual experience."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Clubs,
    coder: "布莱姆·科亨",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Bram_Cohen.jpg",
    milestone: [
      { year: 2002, event: "创造了 BitTorrent 对等协议" },
    ],
    quote: "You get so tired of having your work die. I just wanted to make something that people would actually use."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Clubs,
    coder: "布兰登·艾克",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Brendan_Eich.jpg",
    milestone: [
      { year: 1995, event: "创造了 JavaScript 语言" },
    ],
    quote: "If the web can be evolved to include the missing APIs and have better performance, developers won't need to go beyond the web."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Clubs,
    coder: "索菲·威尔逊",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Sophie_Wilson.jpg",
    milestone: [
      { year: 1978, event: "设计了橡子微型计算机" },
      { year: 1981, event: "开发了 BBC Basic 语言" },
    ],
    quote: "I'm the rare engineer who says the answer is obviously Z. It makes me a dangerous person to employ in IT but a useful one."
  },
  {
    key: CardKey.Five,
    type: CardSuit.Clubs,
    coder: "詹姆斯·高斯林",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/James_Gosling.jpg",
    milestone: [
      { year: 1995, event: "创造了 Java 语言" },
    ],
    quote: "People think of security as a noun, something you go buy. In reality, it's an abstract concept like happiness."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Clubs,
    coder: "比尔·乔伊",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Bill_Joy.jpg",
    milestone: [
      { year: 1976, event: "创造了 VI 编辑器" },
      { year: 1978, event: "创造了 Unix 下的 C Shell" },
    ],
    quote: "We have to encourage the future we want instead of trying to prevent the future war fear."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Clubs,
    coder: "斯蒂夫·沃兹尼亚克",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Steve_Wozniak.jpg",
    milestone: [
      { year: 1977, event: "设计了第一台大众市场的微型计算机 Apple II" },
      { year: 1987, event: "发明了通用遥控器" },
    ],
    quote: "In the end, I hope there's a little note somewhere taht says I designed a good computer."
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Clubs,
    coder: "沃德·克莉史汀森",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Ward_Christensen.jpg",
    milestone: [
      { year: 1977, event: "开发了一种简单的文件传输协议 XMODEM" },
      { year: 1978, event: "第一个公告板 CBBS 共同创始人" },
    ],
    quote: "I patterned the software after the cork board and push-pins type of bulletin board, and coined the term \"BBS for it\"."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Clubs,
    coder: "丹尼斯·里奇",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Dennis_Ritchie.jpg",
    milestone: [
      { year: 1970, event: "合作创建了 Unix 操作系统" },
      { year: 1978, event: "设计了 C 语言" },
    ],
    quote: "Unix is basically a simple operating system, but you have to be a genius to understand the simplicity."
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Clubs,
    coder: "达娜",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Dana_Ulery.jpg",
    milestone: [
      { year: 1961, event: "早期的科学计算应用先锋" },
      { year: 1971, event: "建立了电子数据交换标准" },
    ],
    quote: "Knowledge management is about using information to formulate the right problem in the first place, a tremendous and often unrecognized challenge in itself."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Clubs,
    coder: "法兰·艾伦",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Frances_Allen.jpg",
    milestone: [
      { year: 1962, event: "为最早的超级计算机之一 IBM Stretch 设计了编译器" },
    ],
    quote: "A very big step was not only identifying parallelism, but identifying useful parallelism."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Clubs,
    coder: "马文·李·明斯基",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Marvin_Minsky.jpg",
    milestone: [
      { year: 1951, event: "发明了神经网络和第一台自学机器" },
      { year: 1963, event: "发明了第一台头戴式图形显示器" },
    ],
    quote: "No computer has ever been designed that is ever aware of what it's doing; but most of the time, we aren't either."
  },
  {
    key: CardKey.King,
    type: CardSuit.Clubs,
    coder: "艾伦·图灵",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Alan_Kay.png",
    milestone: [
      { year: 1936, event: "发明了图灵机" },
      { year: 1939, event: "开发出可以破解纳粹加密的计算机" },
      { year: 1950, event: "发明了图灵测试" },
    ],
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
  },
]

export default ClubCards