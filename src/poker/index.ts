// import JokerCards from './poker-coder/en/joker'
// import SpadeCards from './poker-coder/en/spade'
// import HeartCards from './poker-coder/en/heart'
// import ClubCards from './poker-coder/en/club'
// import DiamondCards from './poker-coder/en/diamond'
import JokerCards from './poker-coder/cn/joker'
import SpadeCards from './poker-coder/cn/spade'
import HeartCards from './poker-coder/cn/heart'
import ClubCards from './poker-coder/cn/club'
import DiamondCards from './poker-coder/cn/diamond'

import { PokerCard } from '../interfaces'

export const PokerList: PokerCard[] = [
  ...JokerCards,
  ...SpadeCards,
  ...HeartCards,
  ...ClubCards,
  ...DiamondCards,
]
