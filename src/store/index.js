import { createStore, combineReducers } from "redux";
import { AppReducer } from "./reducers";
var rootReducer = combineReducers({
  AppReducer
});
export const store = createStore(rootReducer);
