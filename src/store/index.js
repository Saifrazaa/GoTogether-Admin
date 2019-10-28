
import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { AppReducer } from "./reducers";
var rootReducer = combineReducers({
  AppReducer
});
export const store = createStore(rootReducer,applyMiddleware(thunk));
