import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { ModelManagerReducer } from "./reducer/ModelManager.reducer"
import { ModelReducer } from "./reducer/Model.reducer"

/* eslint-disable no-underscore-dangle */
const rootReducer = combineReducers({
  ModelManagerReducer,
  ModelReducer,
})
/* eslint-enable */

export const store = createStore(rootReducer, applyMiddleware(thunk))