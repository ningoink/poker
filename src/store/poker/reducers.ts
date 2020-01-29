import { PokerCardState, REQUEST_POKER_CARD_ACTION, RECEIVE_POKER_CARD_ACTION, requestPokerCardAction, receivePokerCardAction } from './types'

const initialState = (): PokerCardState => {
  return {
    list: [],
    loading: false,
  }
}

type PokerCardAction = requestPokerCardAction | receivePokerCardAction

const pokerReducer = (state = initialState(), actions: PokerCardAction): PokerCardState => {
  switch (actions.type) {
    case REQUEST_POKER_CARD_ACTION:
      return { ...state, loading: true }
    case RECEIVE_POKER_CARD_ACTION:
      return { ...state, loading: false, list: actions.payload.list }
    default:
      return state
  }
}

export default pokerReducer
