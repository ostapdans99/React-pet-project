import { combineReducers } from "redux"
import { testReducer } from "./testReducer"

export const mainReducer = combineReducers({
	data: testReducer,
})
