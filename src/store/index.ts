import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import pokerReducer from './poker/reducers'

const rootReducer = combineReducers({
  pokerReducer: pokerReducer,
})

const loggerMiddleware = createLogger()

export default function configureStore() {
  const middleWares = [
    thunkMiddleware,
    loggerMiddleware,
  ]
  const middleWareEnhancer = applyMiddleware(...middleWares)

  return createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  )
}

export type AppState = ReturnType<typeof rootReducer>