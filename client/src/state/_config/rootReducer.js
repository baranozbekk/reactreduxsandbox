import { combineReducers } from 'redux'

import dbDataReducer from '../reducers/dbDataReducer'
import userPreferencesReducer from '../reducers/userPreferencesReducer'
import cartReducer from '../reducers/cartReducer'

export default combineReducers({
  dbData: dbDataReducer,
  userPreferences: userPreferencesReducer,
  cartData: cartReducer,
})
