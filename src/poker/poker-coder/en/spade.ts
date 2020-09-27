import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const SpadeCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Spades,
    coder: "Ada Lovelace",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "ada_lovelace.jpg",
    milestone: [
      { year: 1843, event: "Invented computer algorithms" },
      { year: 1843, event: "Wrote the world's first computer program" },
    ],
    quote: "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Spades,
    coder: "Linus Torvalds",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "linus_torvalds.jpeg",
    milestone: [
      { year: 1991, event: "Created the Linux operating system" },
      { year: 2005, event: "Created the Git Version control system" },
    ],
    quote: "Intelligence is the ability to avoid doing work, yet getting the work done."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Spades,
    coder: "Bjarne Stroustrup",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "bjarne_stroustrup.jpg",
    milestone: [
      { year: 1985, event: "Created the C++ programming language" },
    ],
    quote: "Legacy code often differs from its suggested alternative by actually working and scaling."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Spades,
    coder: "Patricia Sellinger",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "patricia_sellinger.jpeg",
    milestone: [
      { year: 1974, event: "Helped create System R, the first implementation of SQL" },
    ],
    quote: "One of the wonderful things about data management is it includes all of the problems of programming languages, all of the problems of operating systems."
  },
  {
    key: CardKey.Five,
    type: CardSuit.Spades,
    coder: "Tim Berners-Lee",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "tim_berners-lee.jpg",
    milestone: [
      { year: 1991, event: "Invented the World Wide Web" },
    ],
    quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Spades,
    coder: "Richard Stallman",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "richard_stallman.jpg",
    milestone: [
      { year: 1983, event: "Developed the GNU operating system" },
      { year: 1985, event: "Founded the Free Software Foundation" },
      { year: 1985, event: "Created the GNU Emacs code editor" },
    ],
    quote: "Sharing is good. And with digital technology, sharing is easy."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Spades,
    coder: "Raymond Kurzweil",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "raymond_kurzweil.jpg",
    milestone: [
      { year: 1974, event: "Invented omni-font optical character recognition" },
      { year: 1987, event: "Developed the first commercial text-to-speech synthesizer" },
    ],
    quote: "Once a computer achieves human intelligence it will necessary roar past it."
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Spades,
    coder: "Ken Thompson",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "ken_thompson.jpg",
    milestone: [
      { year: 1969, event: "Designed the B programming language" },
      { year: 1970, event: "Co-created the Unix operating" },
      { year: 2009, event: "Co-created the Go programming language" },
    ],
    quote: "When in doubt, use brute force."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Spades,
    coder: "Ray Tomlinson",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "ray_tomlinson.jpg",
    milestone: [
      { year: 1971, event: "Invented email" },
    ],
    quote: "I see email being used, by and large, exactly the way I envisioned. Everybody uses it in di☒erent ways, but they use it in a way they find works for them."
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Spades,
    coder: "Mary Allen Wilkes",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "mary_allen_wilkes.jpeg",
    milestone: [
      { year: 1961, event: "Designed interactive operating system LAP6 for the LINC" },
      { year: 1965, event: "First person to build and use a personal computer in the home." },
    ],
    quote: "We had the quaint notion that software should be completely, absolutely free of bugs. Unfortunately it's a notion that never really quite caught on."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Spades,
    coder: "Edsger Dijkstra",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "edsger_dijkstra.jpg",
    milestone: [
      { year: 1956, event: "Invented the Dijkstra Shortest-Path Algorithm" },
      { year: 1965, event: "Created the Dining Philosophers problem" },
    ],
    quote: "The question of whether computers can think is like the question of whether submarines can swim."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Spades,
    coder: "Douglas Engelbart",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "douglas_engelbart.jpg",
    milestone: [
      { year: 1964, event: "Invented the mouse" },
      { year: 1973, event: "Helped invent the Graphic User Interface" },
    ],
    quote: "The better we get at getting better, the faster we will get better."
  },
  {
    key: CardKey.King,
    type: CardSuit.Spades,
    coder: "Konrad Zuse",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "konrad_zuse.jpg",
    milestone: [
      { year: 1938, event: "Built the first binary computer" },
      { year: 1941, event: "Built the first programmable digital computer" },
      { year: 1945, event: "Designed the first high-level programming language" },
    ],
    quote: "You could say I was too lazy to calculate, so I invented the computer."
  },
]

export default SpadeCards
