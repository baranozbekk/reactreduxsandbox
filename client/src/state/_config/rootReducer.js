import { combineReducers } from 'redux'

import dbDataReducer from '../reducers/dbDataReducer'

export default combineReducers({
  dbData: dbDataReducer,
})
