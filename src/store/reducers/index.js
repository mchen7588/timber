import authReducer from "./auth"
import treeReducer from './tree'
import treeDetailReducer from './treeDetail'

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  auth: authReducer,
  treeReducer,
  treeDetailReducer,
})

export default rootReducer
