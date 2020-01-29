import { loadPokerCoderList } from "../poker"
import { PokerCard } from "../interfaces"
import { AppServerResponseData } from '../interfaces/commons'

export const getPoker = (lng: string) => Promise.resolve<AppServerResponseData<PokerCard[]>>({
  success: true,
  data: loadPokerCoderList(lng),
})
