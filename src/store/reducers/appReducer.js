import { AppActions } from "../actions";
var initialState = {
  name: "my name is saif",
  id: "123"
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.CLICKED:
      return Object.assign({}, state, {
        name: action.payload.name,

        id: action.payload.id
      });
    default:
      return state;
  }
}
