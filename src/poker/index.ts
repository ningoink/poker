import pokerCoder from './poker-coder/en'
import pokerCoderCn from './poker-coder/cn'
import pokerSecond from './poker-second/en'
import pokerSecondCn from './poker-second/cn'
import { EN, CN, POKER_CODER, POKER_SECOND } from '../interfaces'

export const loadPokerList = (lng: string, collection :string) => {
  return collection === POKER_CODER
    ? loadPokerCoder(lng)
    : collection === POKER_SECOND
      ? loadPokerSecond(lng)
      : loadPokerCoder(lng)
}

const loadPokerCoderList = () => pokerCoder
const loadPokerCoderListCn = () => pokerCoderCn
export const loadPokerCoder = (lng: string) => {
  return lng === EN
    ? loadPokerCoderList()
    : lng === CN
      ? loadPokerCoderListCn()
      : loadPokerCoderList()
}

const loadPokerSecondList = () => pokerSecond
const loadPokerSecondListCn = () => pokerSecondCn
export const loadPokerSecond = (lng: string) => {
  return lng === EN
    ? loadPokerSecondList()
    : lng === CN
      ? loadPokerSecondListCn()
      : loadPokerSecondList()
}

