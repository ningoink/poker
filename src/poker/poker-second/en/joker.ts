import { QINIU_CDN_HYLERRIX_URL } from "../../../config"
import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const JokerCards: PokerCard[] = [
  {
    key: CardKey.BigJoker,
    type: CardSuit.Jokers,
    coder: "BigJoker",
    gender: UserGender.Male,
    picture: QINIU_CDN_HYLERRIX_URL + "hylerrix.jpeg",
    milestone: [
      { year: 2020, event: "NingoWood BigJoker" },
    ],
    quote: "quote BigJoker."
  },
  {
    key: CardKey.LittleJoker,
    type: CardSuit.Jokers,
    coder: "LittleJoker",
    gender: UserGender.Other,
    picture: QINIU_CDN_HYLERRIX_URL + "hylerrix.jpeg",
    milestone: [
      { year: 2020, event: "NingoWood LittleJoker" },
    ],
    quote: "quote LittleJoker."
  }
]

export default JokerCards
