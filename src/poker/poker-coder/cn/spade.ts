import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const SpadeCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Spades,
    coder: "埃达·洛夫莱斯",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "ada_lovelace.jpg",
    milestone: [
      { year: 1843, event: "发明了计算机算法" },
      { year: 1843, event: "编写了第一个计算机程序" },
    ],
    quote: "分析引擎不会凭空产生事务，但它可以优化我们处理事务的方式。"
  },
  {
    key: CardKey.Two,
    type: CardSuit.Spades,
    coder: "林纳斯·托瓦兹",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "linus_torvalds.jpeg",
    milestone: [
      { year: 1991, event: "创造了 Linux 操作系统" },
      { year: 2005, event: "创造了 Git 版本控制系统" },
    ],
    quote: "天赋使人事半功倍。"
  },
  {
    key: CardKey.Three,
    type: CardSuit.Spades,
    coder: "比雅尼·斯特劳斯特鲁普",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "bjarne_stroustrup.jpg",
    milestone: [
      { year: 1985, event: "创造了 C++ 语言" },
    ],
    quote: "传统代码通常在实际工作和扩展方面与其建议的替代方法不同。"
  },
  {
    key: CardKey.Four,
    type: CardSuit.Spades,
    coder: "帕特里夏·塞林格",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "patricia_sellinger.jpeg",
    milestone: [
      { year: 1974, event: "帮助创造 System R 项目(SQL 的第一次实现)" },
    ],
    quote: "数据管理的精美之处在于它涵盖了所有编程语言和所有操作系统会遇到的难题。"
  },
  {
    key: CardKey.Five,
    type: CardSuit.Spades,
    coder: "蒂姆·伯纳斯-李",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "tim_berners-lee.jpg",
    milestone: [
      { year: 1991, event: "创造了万维网" },
    ],
    quote: "Web 直到现在也没有达到我发明初期的设想，未来仍会比过去更强大。"
  },
  {
    key: CardKey.Six,
    type: CardSuit.Spades,
    coder: "理查德·斯托曼",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "richard_stallman.jpg",
    milestone: [
      { year: 1983, event: "发明了 GNU 操作系统" },
      { year: 1985, event: "建立了自由软件基金会" },
      { year: 1985, event: "创造了 GNU Emacs 编辑器" },
    ],
    quote: "分享很棒。配上数字技术后，分享也会很容易。"
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Spades,
    coder: "雷蒙德·库茨魏尔",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "raymond_kurzweil.jpg",
    milestone: [
      { year: 1974, event: "发明了 OCR(光学字符识别)" },
      { year: 1987, event: "开发了首款商用文本语音合成器" },
    ],
    quote: "一旦计算机达到了人类的智力水平，它一定会更快地超过。"
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Spades,
    coder: "肯·汤普逊",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "ken_thompson.jpg",
    milestone: [
      { year: 1969, event: "发明了 B 语言" },
      { year: 1970, event: "合作发明了 Unix 操作系统" },
      { year: 2009, event: "合作发明了 Go 语言" },
    ],
    quote: "如有疑问，请使用蛮力。"
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Spades,
    coder: "雷·汤姆林森",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "ray_tomlinson.jpg",
    milestone: [
      { year: 1971, event: "发明了 Email" },
    ],
    quote: "我发现电子邮件基本上在按照我的设想被使用。每个人都因不同的原因使用它，也都会找到适合自己的使用方式。"
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Spades,
    coder: "Mary Allen Wilkes",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "mary_allen_wilkes.jpeg",
    milestone: [
      { year: 1961, event: "为 LINC 设计了交互式操作系统 LAP6" },
      { year: 1965, event: "第一个在家中建造和使用个人计算机" },
    ],
    quote: "我们有一个古朴的想法，即软件应该没有任何错误。不幸的是，这个想法从未真正被实现。"
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Spades,
    coder: "艾兹赫尔·戴克斯特拉",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "edsger_dijkstra.jpg",
    milestone: [
      { year: 1956, event: "发明了 Dijkstra 最短路径算法" },
      { year: 1965, event: "提出了哲学家就餐问题" },
    ],
    quote: "计算机是否可以思考的问题就像潜水艇是否可以游泳的问题一样。"
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Spades,
    coder: "道格拉斯·恩格尔巴特",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "douglas_engelbart.jpg",
    milestone: [
      { year: 1964, event: "发明了鼠标" },
      { year: 1973, event: "帮助发明了图形用户界面" },
    ],
    quote: "我们越是善于进步，也就进步得越快。"
  },
  {
    key: CardKey.King,
    type: CardSuit.Spades,
    coder: "康拉德·楚泽",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "konrad_zuse.jpg",
    milestone: [
      { year: 1938, event: "建造了第一个二进制电脑" },
      { year: 1941, event: "建造了第一个可编程数字计算机" },
      { year: 1945, event: "设计了第一个高级程序设计语言" },
    ],
    quote: "你可以说我在计算上很懒惰，但因此我创造了计算机。"
  },
]

export default SpadeCards
