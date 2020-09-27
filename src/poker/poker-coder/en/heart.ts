import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const HeartCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Hearts,
    coder: "Grace Hopper",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "grace_hopper.jpg",
    milestone: [
      { year: 1945, event: "Coined the term \"bug\"" },
      { year: 1952, event: "Invented the compiler" },
      { year: 1959, event: "Helped develop COBOL" },
    ],
    quote: "When we need greater computer power, the answer is not to get a bigger computer, but to build systems of computers and operate them in parallel."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Hearts,
    coder: "Andrew Ng",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "andrew_ng.jpg",
    milestone: [
      { year: 2007, event: "Lead the Stanford Artificial Intelligence Robot Project" },
      { year: 2008, event: "Lead the Stanford Autonomous Helicopter Project" },
      { year: 2011, event: "Online Machine Learning Course" },
    ],
    quote: "Today I actually have a hard time thinking of an industry that I don't think AI will transform in the next several years."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Hearts,
    coder: "Corrinne Yu",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "corrinne_yu.jpg",
    milestone: [
      { year: 1990, event: "Wrote code for the US Space Shuttle program" },
      { year: 1994, event: "Created her own 3D graphics engines" },
      { year: 2008, event: "Lead development of the Halo game series" },
    ],
    quote: "Sometimes I cuddle with my code. I grab some code print-outs, surround myself with a few books, hold onto a legal pad, curl up on a couch with a blanket and start reading and scribbling away."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Hearts,
    coder: "Brian Fox",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "brian_fox.png",
    milestone: [
      { year: 1989, event: "Created the GNU Bash Shell" },
      { year: 2008, event: "Co-authored the OVC open source voting system" },
    ],
    quote: "I try hard to not 'work' Instead. I try to stay focused on why I'm doing what I do, so that I can truly enjoy the sense of satisfaction when I am finished."
  },
  {
    key: CardKey.Five,
    type: CardSuit.Hearts,
    coder: "Guido Van Rossum",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "guido_van_rossum.jpg",
    milestone: [
      { year: 1990, event: "Created Python" },
    ],
    quote: "Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another's code; too little and expressiveness is endangered."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Hearts,
    coder: "Larry Wall",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "larry_wall.jpg",
    milestone: [
      { year: 1985, event: "Created Patch, a precursor to Git" },
      { year: 1987, event: "Created the Perl programming language" },
    ],
    quote: "The only reason I've managed to run this open source project is that I have learned to delegate even the delegation to other people."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Hearts,
    coder: "Bob Frankston & Dan Bricklin",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "dan_bricklin_and_bob_frankston.jpg",
    milestone: [
      { year: 1979, event: "Created VisiCalc, the first spreadsheet program" },
    ],
    quote: "In a good system, just doing what you normally would do to help yourself helps everybody. - Dan Bricklin"
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Hearts,
    coder: "Adele Goldberg",
    gender: UserGender.Female,
    picture: QINIU_CDN_POKER_URL + "adele_goldberg.jpg",
    milestone: [
      { year: 1973, event: "Developed concepts used for Graphic User Interfaces" },
      { year: 1980, event: "Helped develop the Smalltalk-80 programming language" },
    ],
    quote: "Don't ask whether you can do something, but how to do it."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Hearts,
    coder: "Brian Kernighan",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "brian_kernighan.png",
    milestone: [
      { year: 1970, event: "Co-created the Unix operating system" },
      { year: 1972, event: "Created the first \"Hello World\" program" },
      { year: 1977, event: "Co-authored the AWK programming language" },
    ],
    quote: "Don't comment bad code-rewrite it."
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Hearts,
    coder: "Donald Knuth",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "donald_knuth.jpg",
    milestone: [
      { year: 1973, event: "Published The Art of Computer programming" },
      { year: 1978, event: "Designed the TeX tyypesetting system" },
    ],
    quote: "Science is what we understand well enough to explain to a computer. Art is everything else we do."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Hearts,
    coder: "Judea Pearl",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "judea_pearl.png",
    milestone: [
      { year: 1970, event: "Created the probabilistic approach to artificial intelligence" },
      { year: 1985, event: "Invented Bayesian Networks" },
    ],
    quote: "The surest kind of knowledge is what you construct yourself."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Hearts,
    coder: "John McCarthy",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "john_mc_carthy.jpg",
    milestone: [
      { year: 1955, event: "Coined the term \"Artificial Intelligence\"" },
      { year: 1958, event: "Created the LISP high-level programming language" },
    ],
    quote: "Everyone needs computer programming. It will be the way we speak to the servants."
  },
  {
    key: CardKey.King,
    type: CardSuit.Hearts,
    coder: "Maurice Wilkes",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "maurice_wilkes.png",
    milestone: [
      { year: 1949, event: "Built EDSAC, the first computer with an internally stored program" },
    ],
    quote: "A good part of the remainder of my life was going to be spent in finding errors in my own programs."
  },
]

export default HeartCards
