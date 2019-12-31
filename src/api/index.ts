import { PokerList } from "../poker"
import { PokerCard } from "../interfaces"
import { AppServerResponseData } from '../interfaces/commons'

export const getPoker = () => Promise.resolve<AppServerResponseData<PokerCard[]>>({
  success: true,
  data: PokerList,
})