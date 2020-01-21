import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const SpadeCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Spades,
    coder: "埃达·洛夫莱斯",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Ada_Lovelace.jpg",
    milestone: [
      { year: 1843, event: "发明了计算机算法" },
      { year: 1843, event: "编写了第一个计算机程序" },
    ],
    quote: "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Spades,
    coder: "林纳斯·托瓦兹",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Linus_Torvalds.jpeg",
    milestone: [
      { year: 1991, event: "创造了 Linux 操作系统" },
      { year: 2005, event: "创造了 Git 版本控制系统" },
    ],
    quote: "Intelligence is the ability to avoid doing work, yet getting the work done."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Spades,
    coder: "比雅尼·斯特劳斯特鲁普",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Bjarne_Stroustrup.jpg",
    milestone: [
      { year: 1985, event: "创造了 C++ 语言" },
    ],
    quote: "Legacy code often differs from its suggested alternative by actually working and scaling."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Spades,
    coder: "帕特里夏·塞林格",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Patricia_Sellinger.jpeg",
    milestone: [
      { year: 1974, event: "帮助创造 System R 项目(SQL 的第一次实现)" },
    ],
    quote: "One of the wonderful things about data management is it includes all of the problems of programming languages, all of the problems of operating systems."
  },
  {
    key: CardKey.Five,
    type: CardSuit.Spades,
    coder: "蒂姆·伯纳斯-李",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Tim_Berners-Lee.jpg",
    milestone: [
      { year: 1991, event: "创造了万维网" },
    ],
    quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Spades,
    coder: "理查德·斯托曼",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Richard_Stallman.jpg",
    milestone: [
      { year: 1983, event: "发明了 GNU 操作系统" },
      { year: 1985, event: "建立了自由软件基金会" },
      { year: 1985, event: "创造了 GNU Emacs 编辑器" },
    ],
    quote: "Sharing is good. And with digital technology, sharing is easy."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Spades,
    coder: "雷蒙德·库茨魏尔",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Raymond_Kurzweil.jpg",
    milestone: [
      { year: 1974, event: "发明了 OCR(光学字符识别)" },
      { year: 1987, event: "开发了首款商用文本语音合成器" },
    ],
    quote: "Once a computer achieves human intelligence it will necessary roar past it."
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Spades,
    coder: "肯·汤普逊",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Ken_Thompson.jpg",
    milestone: [
      { year: 1969, event: "发明了 B 语言" },
      { year: 1970, event: "合作发明了 Unix 操作系统" },
      { year: 2009, event: "合作发明了 Go 语言" },
    ],
    quote: "When in doubt, use brute force."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Spades,
    coder: "雷·汤姆林森",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Ray_Tomlinson.jpg",
    milestone: [
      { year: 1971, event: "发明了 Email" },
    ],
    quote: "I see email being used, by and large, exactly the way I envisioned. Everybody uses it in di☒erent ways, but they use it in a way they find works for them."
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Spades,
    coder: "Mary Allen Wilkes",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Mary_Allen_Wilkes.jpeg",
    milestone: [
      { year: 1961, event: "为 LINC 设计了交互式操作系统 LAP6" },
      { year: 1965, event: "第一个在家中建造和使用个人计算机" },
    ],
    quote: "We had the quaint notion that software should be completely, absolutely free of bugs. Unfortunately it's a notion that never really quite caught on."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Spades,
    coder: "艾兹赫尔·戴克斯特拉",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Edsger_Dijkstra.jpg",
    milestone: [
      { year: 1956, event: "发明了 Dijkstra 最短路径算法" },
      { year: 1965, event: "提出了哲学家就餐问题" },
    ],
    quote: "The question of whether computers can think is like the question of whether submarines can swim."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Spades,
    coder: "道格拉斯·恩格尔巴特",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Douglas_Engelbart.jpg",
    milestone: [
      { year: 1964, event: "发明了鼠标" },
      { year: 1973, event: "帮助发明了图形用户界面" },
    ],
    quote: "The better we get at getting better, the faster we will get better."
  },
  {
    key: CardKey.King,
    type: CardSuit.Spades,
    coder: "康拉德·楚泽",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Konrad_Zuse.jpg",
    milestone: [
      { year: 1938, event: "建造了第一个二进制电脑" },
      { year: 1941, event: "建造了第一个可编程数字计算机" },
      { year: 1945, event: "设计了第一个高级程序设计语言" },
    ],
    quote: "You could say I was too lazy to calculate, so I invented the computer."
  },
]

export default SpadeCards