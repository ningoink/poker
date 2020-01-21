import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const HeartCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Hearts,
    coder: "Grace Hopper",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Grace_Hopper.jpg",
    milestone: [
      { year: 1945, event: "首创术语“bug”" },
      { year: 1952, event: "发明了编译器" },
      { year: 1959, event: "合作开发了 COBOL" },
    ],
    quote: "When we need greater computer power, the answer is not to get a bigger computer, but to build systems of computers and operate them in parallel."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Hearts,
    coder: "Andrew Ng",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Andrew_Ng.jpg",
    milestone: [
      { year: 2007, event: "领导斯坦福人工智能机器人项目" },
      { year: 2008, event: "领导斯坦福自治直升机项目" },
      { year: 2011, event: "上线线上机器学习课程" },
    ],
    quote: "Today I actually have a hard time thinking of an industry that I don't think AI will transform in the next several years."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Hearts,
    coder: "Corrinne Yu",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Corrinne_Yu.jpg",
    milestone: [
      { year: 1990, event: "为美国航天飞机计划编写代码" },
      { year: 1994, event: "为自己创建了 3D 图形引擎" },
      { year: 2008, event: "领导 Halo 游戏系列的开发" },
    ],
    quote: "Sometimes I cuddle with my code. I grab some code print-outs, surround myself with a few books, hold onto a legal pad, curl up on a couch with a blanket and start reading and scribbling away."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Hearts,
    coder: "Brian Fox",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Brian_Fox.png",
    milestone: [
      { year: 1989, event: "创造了 GNU 的 Bash Shell" },
      { year: 2008, event: "合作开发了 OVC 开源投票系统" },
    ],
    quote: "I try hard to not 'work' Instead. I try to stay focused on why I'm doing what I do, so that I can truly enjoy the sense of satisfaction when I am finished."
  },
  {
    key: CardKey.Five,
    type: CardSuit.Hearts,
    coder: "Guido Van Rossum",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Guido_Van_Rossum.jpg",
    milestone: [
      { year: 1990, event: "创造了 Python 语言" },
    ],
    quote: "Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another's code; too little and expressiveness is endangered."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Hearts,
    coder: "Larry Wall",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Larry_Wall.jpg",
    milestone: [
      { year: 1985, event: "创建了 Git 的前身 Patch" },
      { year: 1987, event: "创建了 Perl 语言" },
    ],
    quote: "The only reason I've managed to run this open source project is that I have learned to delegate even the delegation to other people."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Hearts,
    coder: "Bob Frankston & Dan Bricklin",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Dan_Bricklin_And_Bob_Frankston.jpg",
    milestone: [
      { year: 1979, event: "创造了第一个电子表格程序 VisiCalc" },
    ],
    quote: "In a good system, just doing what you normally would do to help yourself helps everybody. - Dan Bricklin"
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Hearts,
    coder: "Adele Goldberg",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Adele_Goldberg.jpg",
    milestone: [
      { year: 1973, event: "提出用于图形用户界面的概念" },
      { year: 1980, event: "合作开发了 Smalltalk-80 语言" },
    ],
    quote: "Don't ask whether you can do something, but how to do it."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Hearts,
    coder: "Brian Kernighan",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Brian_Kernighan.png",
    milestone: [
      { year: 1970, event: "合作开发了 Unix 操作系统" },
      { year: 1972, event: "编写了第一个 “Hello World” 程序" },
      { year: 1977, event: "合作发明了 Awk 语言" },
    ],
    quote: "Don't comment bad code-rewrite it."
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Hearts,
    coder: "Donald Knuth",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Donald_Knuth.jpg",
    milestone: [
      { year: 1973, event: "出版了《计算机编程艺术》" },
      { year: 1978, event: "设计了 TeX 类型设置系统" },
    ],
    quote: "Science is what we understand well enough to explain to a computer. Art is everything else we do."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Hearts,
    coder: "Judea Pearl",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Judea_Pearl.png",
    milestone: [
      { year: 1970, event: "创建了人工智能的概率方法" },
      { year: 1985, event: "发明了贝叶斯网络" },
    ],
    quote: "The surest kind of knowledge is what you construct yourself."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Hearts,
    coder: "John McCarthy",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/John_McCarthy.jpg",
    milestone: [
      { year: 1955, event: "提出了术语“人工智能”" },
      { year: 1958, event: "创建了 Lisp 语言" },
    ],
    quote: "Everyone needs computer programming. It will be the way we speak to the servants."
  },
  {
    key: CardKey.King,
    type: CardSuit.Hearts,
    coder: "Maurice Wilkes",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Maurice_Wilkes.png",
    milestone: [
      { year: 1949, event: "打造了第一台具有内部存储程序的计算机 EDSAC" },
    ],
    quote: "A good part of the remainder of my life was going to be spent in finding errors in my own programs."
  },
]

export default HeartCards