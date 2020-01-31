export interface I18nState {
  lng: string
}

export const SET_LANGUAGE_ACTION = 'SET_LANGUAGE_ACTION'

export interface setLanguageAction {
  type: typeof SET_LANGUAGE_ACTION,
  payload: { lng: string }
}
