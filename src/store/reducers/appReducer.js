import { AppActions } from "../actions";
var initialState = {
  fetch: [],
  error: null
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {


    case AppActions.GETDATA:
      return Object.assign({}, state, { fetch: action.payload });
    case AppActions.GET_DATA_FAILURE:
      return Object.assign({}, state, { error: action.payload })


    case AppActions.APPROVED:
      console.log("approved")
      var fetch = state.fetch;
      var newFetch = fetch.filter((d, i) => d._id !== action.payload);
      console.log(action.payload)
      console.log("newFetch", newFetch)
      return Object.assign({}, state, { fetch: newFetch });
    case AppActions.APPROVED_FAILURE:
      return Object.assign({}, state, { error: action.payload })

    default:
      return state;
  }
}
