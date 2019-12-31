import { createStore, combineReducers, applyMiddleware } from "redux";
import { connect } from "react-redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";

import { AppReducer, AuthReducer, DataReducer } from "./Reducers";
import { AuthEpic, DataEpic } from "./Epics"

//Combine All Reducers
var rootReducer = combineReducers({
  AuthReducer,
  AppReducer,
  DataReducer
});

//Combine All Epics
export const rootEpic = combineEpics(
  //Auth Epics
  AuthEpic.Login,

  //Data Epics
  DataEpic.GetUsersForApproval,
  DataEpic.HanldeUserRequest,
  DataEpic.GetAllUsers,
  DataEpic.HandleUserListAction,
  DataEpic.GetAllOnGoingRides,
  DataEpic.GetAllComplains
);

export { connect };
const epicMiddleware = createEpicMiddleware();
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

