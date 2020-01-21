import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const ClubCards: PokerCard[] = [
  {
    key: CardKey.Ace,
    type: CardSuit.Clubs,
    coder: "Ida Rhodes",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Ida_Rhodes.jpeg",
    milestone: [
      { year: 1940, event: "Worked on Mathematical Tables Project" },
      { year: 1950, event: "Designed the C-10 programming language for the UNIVAC-I(with Betty Holberton)" },
    ],
    quote: "Whenever I see anyone reading a copy of Science Fiction, I gloat silently over the fact that I get my thrills not vicariously but through actual experience."
  },
  {
    key: CardKey.Two,
    type: CardSuit.Clubs,
    coder: "Bram Cohen",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Bram_Cohen.jpg",
    milestone: [
      { year: 2002, event: "Created the BitTorrent peer-to-peer protocol" },
    ],
    quote: "You get so tired of having your work die. I just wanted to make something that people would actually use."
  },
  {
    key: CardKey.Three,
    type: CardSuit.Clubs,
    coder: "Brendan Eich",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Brendan_Eich.jpg",
    milestone: [
      { year: 1995, event: "Created JavaScript" },
    ],
    quote: "If the web can be evolved to include the missing APIs and have better performance, developers won't need to go beyond the web."
  },
  {
    key: CardKey.Four,
    type: CardSuit.Clubs,
    coder: "Sophie Wilson",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Sophie_Wilson.jpg",
    milestone: [
      { year: 1978, event: "Designed the Acorn MicroComputer" },
      { year: 1981, event: "Developed BBC Basic programming language" },
    ],
    quote: "I'm the rare engineer who says the answer is obviously Z. It makes me a dangerous person to employ in IT but a useful one."
  },
  {
    key: CardKey.Five,
    type: CardSuit.Clubs,
    coder: "James Gosling",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/James_Gosling.jpg",
    milestone: [
      { year: 1995, event: "Created Java" },
    ],
    quote: "People think of security as a noun, something you go buy. In reality, it's an abstract concept like happiness."
  },
  {
    key: CardKey.Six,
    type: CardSuit.Clubs,
    coder: "Bill Joy",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Bill_Joy.jpg",
    milestone: [
      { year: 1976, event: "Created the vi editor" },
      { year: 1978, event: "Created the C shell for UNIX" },
    ],
    quote: "We have to encourage the future we want instead of trying to prevent the future war fear."
  },
  {
    key: CardKey.Seven,
    type: CardSuit.Clubs,
    coder: "Steve Wozniak",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Steve_Wozniak.jpg",
    milestone: [
      { year: 1977, event: "Designed the Apple II, the first mass-market microcomputer" },
      { year: 1987, event: "Invented the universal remote control" },
    ],
    quote: "In the end, I hope there's a little note somewhere that says I designed a good computer."
  },
  {
    key: CardKey.Eight,
    type: CardSuit.Clubs,
    coder: "Ward Christensen",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Ward_Christensen.jpg",
    milestone: [
      { year: 1977, event: "Developed XMODEM, a simple file transfer protocol" },
      { year: 1978, event: "Co-founder of CBBS bulletin board, first bulletin board brought online" },
    ],
    quote: "I patterned the software after the cork board and push-pins type of bulletin board, and coined the term \"BBS\" for it."
  },
  {
    key: CardKey.Nine,
    type: CardSuit.Clubs,
    coder: "Dennis Ritchie",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Dennis_Ritchie.jpg",
    milestone: [
      { year: 1970, event: "Co-created the Unix operating system" },
      { year: 1978, event: "Designed the C programming language" },
    ],
    quote: "Unix is basically a simple operating system, but you have to be a genius to understand the simplicity."
  },
  {
    key: CardKey.Ten,
    type: CardSuit.Clubs,
    coder: "Dana Ulery",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Dana_Ulery.jpg",
    milestone: [
      { year: 1961, event: "Pioneered early scientific computing applications" },
      { year: 1971, event: "Established Electronic Data Interchange standards" },
    ],
    quote: "Knowledge management is about using information to formulate the right problem in the first place, a tremendous and often unrecognized challenge in itself."
  },
  {
    key: CardKey.Jack,
    type: CardSuit.Clubs,
    coder: "Frances Allen",
    gender: UserGender.Female,
    picture: "http://q3259ne1t.bkt.clouddn.com/Frances_Allen.jpg",
    milestone: [
      { year: 1962, event: "Designed the compiler for the IBM Stretch, one of the first supercomputers." },
    ],
    quote: "A very big step was not only identifying parallelism, but identifying useful parallelism."
  },
  {
    key: CardKey.Queen,
    type: CardSuit.Clubs,
    coder: "Marvin Minsky",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Marvin_Minsky.jpg",
    milestone: [
      { year: 1951, event: "Invented the neural network and the first self-learning machine" },
      { year: 1963, event: "Invented the first head-mounted graphical display" },
    ],
    quote: "No computer has ever been designed that is ever aware of what it's doing; but most of the time, we aren't either."
  },
  {
    key: CardKey.King,
    type: CardSuit.Clubs,
    coder: "Alan Turing",
    gender: UserGender.Male,
    picture: "http://q3259ne1t.bkt.clouddn.com/Alan_Kay.png",
    milestone: [
      { year: 1936, event: "Invented the Turing Machine" },
      { year: 1939, event: "Developed computers that could crack Nazi encryption" },
      { year: 1950, event: "Invented the Turing Test" },
    ],
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
  },
]

export default ClubCards