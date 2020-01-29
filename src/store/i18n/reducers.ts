import { I18nState, REQUEST_TOGGLE_LANGUAGE_ACTION, requestToggleLanguageAction } from './types'

const initialState = (): I18nState => {
  return {
    lng: 'en',
  }
}

type ToggleLanguageAction = requestToggleLanguageAction

const i18nReducer = (state = initialState(), actions: ToggleLanguageAction): I18nState => {
  switch (actions.type) {
    case REQUEST_TOGGLE_LANGUAGE_ACTION:
      return { ...state, lng: actions.payload.lng }
    default:
      return state
  }
}

export default i18nReducer
