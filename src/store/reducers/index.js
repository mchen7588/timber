import authReducer from "./auth"
import treeReducer from './tree'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  auth: authReducer,
  treeReducer,
})

export default rootReducer
