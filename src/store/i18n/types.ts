export interface I18nState {
  lng: string
}

export const REQUEST_TOGGLE_LANGUAGE_ACTION = 'REQUEST_TOGGLE_LANGUAGE_ACTION'

export interface requestToggleLanguageAction {
  type: typeof REQUEST_TOGGLE_LANGUAGE_ACTION,
  payload: { lng: string }
}
