import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const DiamondCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Diamonds,
    coder: "Dorothy Vaughan",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "dorothy_vaughan.png",
    milestone: [
      { year: 1943, event: "Calculated flight trajectories for the US space program" },
      { year: 1961, event: "Taught her entire staff FORTRAN programming" },
    ],
    quote: "I Changed What I could, and what I couldn't, I endured."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Diamonds,
    coder: "Parisa Tabriz",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "parisa_tabriz.jpg",
    milestone: [
      { year: 2016, event: "Oversees the security of Google Chrome" },
      { year: 2018, event: "Founded Our Security Advocates Conference" },
    ],
    quote: "It's often harder to consistently write secure code than it is to point out insecure code."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Diamonds,
    coder: "Yukihiro Matsumoto",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "yukihiro_matsumoto.jpeg",
    milestone: [
      { year: 1995, event: "Designed the Ruby programming language" },
    ],
    quote: "I believe consistency and orthogonality are tools of design, not the primary goal in design."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Diamonds,
    coder: "Stephen Wolfram",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "stephen_wolfram.jpg",
    milestone: [
      { year: 1986, event: "Developed the Mathematica computer algebra system" },
      { year: 1988, event: "Developed the Wolfram Alpha answer engine" },
    ],
    quote: "Could it be that some place out there in the computational universe, we might find our physical universe?"
  },
  {
    key: CardKey.Five,
    type: CardSuit.Diamonds,
    coder: "Alexey Pajitnov",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "alexey_pajitnov.jpg",
    milestone: [
      { year: 1984, event: "Designed and programmed Tetris" },
    ],
    quote: "Tetris had a very important role in breaking down ordinary people's inhibitions in front of computers."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Diamonds,
    coder: "Phil Zimmermann",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "phil_zimmermann.jpg",
    milestone: [
      { year: 1991, event: "Created the Pretty Good Privacy public-key encryption program" },
    ],
    quote: "If privacy is outlawed, only outlaws will have privacy."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Diamonds,
    coder: "Radia Perlman",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "radia_perlman.jpg",
    milestone: [
      { year: 1985, event: "Designed the Spanning Tree Protocol for Ethernet" },
    ],
    quote: "Start out with finding the right problem to solve."
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Diamonds,
    coder: "Andrew Yao",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "andrew_yao.jpeg",
    milestone: [
      { year: 1997, event: "Proposed Yao's Minimax Principle, using the minimax theorem" },
      { year: 1979, event: "Introduced theory of communication complexity" },
      { year: 1982, event: "Developed Yao's Millionaires' problem and Yao's Test" },
    ],
    quote: "If you have something in mind, go ahead with it. Even if you don't make it to the end, you may yet make it further than others."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Diamonds,
    coder: "Vint Cerf & Bob Kahn",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "vint_cerf_and_bob_kahn.png",
    milestone: [
      { year: 1983, event: "Invented the Transmission Control Protocol" },
      { year: 1983, event: "Invented the Internet Protocol" },
    ],
    quote: "You don't have to be young to learn about technology. You have to feel young. - Vint Cerf"
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Diamonds,
    coder: "Alan Kay",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "alan_kay.png",
    milestone: [
      { year: 1970, event: "Pioneered use of Object-Oriented Programming" },
    ],
    quote: "The best way to predict the future is to invent it."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Diamonds,
    coder: "Margaret Hamilton",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "margaret_hamilton.jpg",
    milestone: [
      { year: 1969, event: "Lead software development for the Apollo Moon Landing mission" },
    ],
    quote: "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Diamonds,
    coder: "Jean E. Sammet",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "jean_e_sammet.png",
    milestone: [
      { year: 1959, event: "Helped develop the COBOL programming language" },
      { year: 1962, event: "Developed the FORMAC programming language" },
    ],
    quote: "At that point...there was relatively little discrimination against women because programmers were very scarce. And so it didn't matter whether you had three heads."
  },
  {
    key: CardKey.King,
    type: CardSuit.Diamonds,
    coder: "Vera Molnar",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "vera_molnar.png",
    milestone: [
      { year: 1959, event: "Started iterating combinatorial images" },
      { year: 1968, event: "Began to create algorithmic paintings based on geometric shapes and themes" },
    ],
    quote: "The machine, which is thought to be cold and inhuman, can help to realize what is most profound in a human being."
  },
]

export default DiamondCards
