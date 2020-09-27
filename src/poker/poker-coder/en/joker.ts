import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"
import { QINIU_CDN_POKER_URL } from "../../../config"

const JokerCards: PokerCard[] = [
  {
    key: CardKey.BigJoker,
    type: CardSuit.Jokers,
    coder: "David Heinemeier Hansson",
    gender: UserGender.Male,
    picture: QINIU_CDN_POKER_URL + "david_heinemeier_hansson.jpg",
    milestone: [
      { year: 2003, event: "Created Ruby on Rails" },
    ],
    quote: "If you're not working on your best idea right now, you're doing it wrong."
  },
  {
    key: CardKey.LittleJoker,
    type: CardSuit.Jokers,
    coder: "Satoshi Nakamoto",
    gender: UserGender.Other,
    picture: QINIU_CDN_POKER_URL + "satoshi_nakamoto.jpg",
    milestone: [
      { year: 2008, event: "Invented Blockchain" },
      { year: 2008, event: "Designed Bitcoin" },
    ],
    quote: "With e-currency based on cryptographic proof, without the need to trust a third party middle-man, money can be secure and transactions effortless."
  }
]

export default JokerCards
