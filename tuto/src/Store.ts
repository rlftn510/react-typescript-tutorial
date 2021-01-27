import { createStore, applyMiddleware } from 'redux'
import rootReducer from './_reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootReducerType = ReturnType<typeof rootReducer>

export default store