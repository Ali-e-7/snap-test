import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer,composeEnhancer)

export default store