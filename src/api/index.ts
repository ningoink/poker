import { PokerList } from "../constant"

export const getPoker = () => Promise.resolve({
  success: true,
  data: PokerList,
})