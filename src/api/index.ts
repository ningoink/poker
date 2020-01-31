import { loadPokerList } from "../poker"
import { PokerCard } from "../interfaces"
import { AppServerResponseData } from '../interfaces/commons'

export const getPoker = (lng: string, collection: string) => Promise.resolve<AppServerResponseData<PokerCard[]>>({
  success: true,
  data: loadPokerList(lng, collection),
})
