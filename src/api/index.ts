import { PokerList } from "../constant"
import { PokerCard } from "../interface"
import { AppServerResponseData } from '../interface/commons'

export const getPoker = () => Promise.resolve<AppServerResponseData<PokerCard[]>>({
  success: true,
  data: PokerList,
})