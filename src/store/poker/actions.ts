import { REQUEST_POKER_CARD_ACTION, RECEIVE_POKER_CARD_ACTION } from './types'
import { PokerCard } from '../../interfaces'
import { Dispatch } from 'redux'
import { getPoker } from '../../api'

export const requestPoker = () => {
  return {
    type: REQUEST_POKER_CARD_ACTION,
  }
}

export const receivePoker = (list: PokerCard[]) => {
  return {
    type: RECEIVE_POKER_CARD_ACTION,
    payload: { list: list }
  }
}

export const fetchPoker = () => (dispatch: Dispatch) => {
  dispatch(requestPoker())
  return getPoker()
    .then(({ data }) => dispatch(receivePoker(data)))
    .catch(() => dispatch(receivePoker([])))
}

