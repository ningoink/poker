import { Dispatch } from 'redux'
import { SET_LANGUAGE_ACTION } from './types'

export const setLanguage = (lng: string) => {
  return {
    type: SET_LANGUAGE_ACTION,
    payload: { lng }
  }
}

export const toggleLanguage = (lng: string) => (dispatch: Dispatch) => {
  return dispatch(setLanguage(lng))
}
