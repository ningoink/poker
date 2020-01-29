import { Dispatch } from 'redux'
import { REQUEST_TOGGLE_LANGUAGE_ACTION } from './types'

export const requestToggleLanguage = (lng: string) => {
  return {
    type: REQUEST_TOGGLE_LANGUAGE_ACTION,
    payload: { lng }
  }
}

export const toggleLanguage = (lng: string) => (dispatch: Dispatch) => {
  return dispatch(requestToggleLanguage(lng))
}
