import { combineReducers } from 'redux'
import vendorReducer from './Pages/VendorList/vendorSlice'
const rootReducer = combineReducers({list:vendorReducer})

export default rootReducer