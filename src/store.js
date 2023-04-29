import {  createStore,applyMiddleware} from 'redux'
import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store