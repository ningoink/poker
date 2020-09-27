import { QINIU_CDN_HYLERRIX_URL } from "../../../config"
import { PokerCard, CardKey, CardSuit, UserGender } from "../../../interfaces"

const JokerCards: PokerCard[] = [
  {
    key: CardKey.BigJoker,
    type: CardSuit.Jokers,
    coder: "大王",
    gender: UserGender.Male,
    picture: QINIU_CDN_HYLERRIX_URL + "hylerrix.jpeg",
    milestone: [
      { year: 2020, event: "凝果屋大王" },
    ],
    quote: "大王名言"
  },
  {
    key: CardKey.LittleJoker,
    type: CardSuit.Jokers,
    coder: "小王",
    gender: UserGender.Other,
    picture: QINIU_CDN_HYLERRIX_URL + "hylerrix.jpeg",
    milestone: [
      { year: 2020, event: "凝果屋小王" },
    ],
    quote: "小王名言."
  }
]

export default JokerCards