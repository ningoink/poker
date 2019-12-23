import JokerCards from './poker-en/joker'
import SpadeCards from './poker-en/spade'
import HeartCards from './poker-en/heart'
import ClubCards from './poker-en/club'
import DiamondCards from './poker-en/diamond'
import { PokerCard } from '../interfaces'

export const PokerList: PokerCard[] = [
  ...JokerCards,
  ...SpadeCards,
  ...HeartCards,
  ...ClubCards,
  ...DiamondCards,
]