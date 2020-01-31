import { loadPokerList } from "../poker"
import { PokerCard } from "../interfaces"
import { AppServerResponseData } from '../interfaces/commons'

export const getPoker = (lng: string, collection: string) => {
  return Promise.resolve<AppServerResponseData<PokerCard[]>>({
    success: true,
    data: loadPokerList(lng, collection),
  })
}
