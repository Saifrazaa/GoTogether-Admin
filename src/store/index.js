import { createStore, combineReducers, applyMiddleware } from "redux";
import { connect } from "react-redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";

import { AppReducer, AuthReducer } from "./reducers";
import { AuthEpic } from "./Epics"

//Combine All Reducers
var rootReducer = combineReducers({
  AuthReducer,
  AppReducer
});

//Combine All Epics
export const rootEpic = combineEpics(
  AuthEpic.Login
);

export { connect };
const epicMiddleware = createEpicMiddleware();
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

