import { AppActions } from "../Actions";
var initialState = {
  fetch: [],
  error: null,
  activeMenu:1
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
