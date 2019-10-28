import { AppActions } from "../actions";
var initialState = {
  name: "my name is saif",
  id: "123",
  fetch:[],
  error:null
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.CLICKED:
      return Object.assign({}, state, {
        name: action.payload.name,

        id: action.payload.id
      });

      case AppActions.GETDATA:
        return Object.assign({}, state, { fetch: action.payload });
    case AppActions.GET_DATA_FAILURE:
        return Object.assign({}, state, { error: action.payload })


        case AppActions.UPDATE:
          return Object.assign({}, state, { fetch: action.payload });
      case AppActions.UPDATE_FAILURE:
          return Object.assign({}, state, { error: action.payload })



    default:
      return state;
  }
}
