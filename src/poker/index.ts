import pokerList from './poker-coder/en'
import pokerListCn from './poker-coder/cn'
import { PokerCard } from '../interfaces'

export const loadPokerCoderList = (lng: string) => {
  let pList: PokerCard[] = []
  switch(lng) {
    case 'en':
      pList = pokerList
      break
    case 'cn':
      pList = pokerListCn
      break
    default:
      pList = pokerList
      break
  }
  return pList
}
