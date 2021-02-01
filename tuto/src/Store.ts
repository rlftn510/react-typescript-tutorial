import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './_reducers'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'


declare global {
   interface Window {
     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
 }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)
))

export type RootReducerType = ReturnType<typeof rootReducer>

export default store