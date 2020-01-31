import { 
  PokerCardState,
  REQUEST_POKER_CARD_ACTION, requestPokerCardAction,
  RECEIVE_POKER_CARD_ACTION, receivePokerCardAction,
  SET_COLLECTION_ACTION, setCollectionAction
} from './types'

const initialState = (): PokerCardState => {
  return {
    collection: '',
    list: [],
    loading: false,
  }
}

type PokerCardAction = requestPokerCardAction | receivePokerCardAction | setCollectionAction

const pokerReducer = (state = initialState(), actions: PokerCardAction): PokerCardState => {
  switch (actions.type) {
    case REQUEST_POKER_CARD_ACTION:
      return { ...state, loading: true }
    case RECEIVE_POKER_CARD_ACTION:
      return { ...state, loading: false, list: actions.payload.list }
    case SET_COLLECTION_ACTION:
      return { ...state, collection: actions.payload.collection }
    default:
      return state
  }
}

export default pokerReducer
