import { REQUEST_POKER_CARD_ACTION, RECEIVE_POKER_CARD_ACTION, SET_COLLECTION_ACTION } from './types'
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

export const fetchPoker = (lng: string, collection: string) => (dispatch: Dispatch) => {
  dispatch(requestPoker())
  return getPoker(lng, collection)
    .then(({ data }) => dispatch(receivePoker(data)))
    .catch(() => dispatch(receivePoker([])))
}

export const setCollection = (collection: string) => {
  return {
    type: SET_COLLECTION_ACTION,
    payload: { collection }
  }
}

export const toggleCollection = (collection: string) => (dispatch: Dispatch) => {
  return dispatch(setCollection(collection))
}