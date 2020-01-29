import { PokerCard } from '../../interfaces'

export interface PokerCardState {
  list: PokerCard[]
  loading: boolean
}

export const REQUEST_POKER_CARD_ACTION = 'REQUEST_POKER_CARD_ACTION'

export interface requestPokerCardAction {
  type: typeof REQUEST_POKER_CARD_ACTION
}

export const RECEIVE_POKER_CARD_ACTION = 'RECEIVE_POKER_CARD_ACTION'

export interface receivePokerCardAction {
  type: typeof RECEIVE_POKER_CARD_ACTION
  payload: { list: PokerCard[] }
}
