import { AppActions } from "../Actions";
var initialState = {
  fetch: [],
  error: null,
  activeMenu: 1
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.MENU_CHANGE:
      return { ...state, activeMenu: action.payload }
    default:
      return state;
  }
}
