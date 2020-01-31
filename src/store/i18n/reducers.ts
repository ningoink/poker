import { I18nState, SET_LANGUAGE_ACTION, setLanguageAction } from './types'

const initialState = (): I18nState => {
  return {
    lng: 'en',
  }
}

type ToggleLanguageAction = setLanguageAction

const i18nReducer = (state = initialState(), actions: ToggleLanguageAction): I18nState => {
  switch (actions.type) {
    case SET_LANGUAGE_ACTION:
      return { ...state, lng: actions.payload.lng }
    default:
      return state
  }
}

export default i18nReducer
