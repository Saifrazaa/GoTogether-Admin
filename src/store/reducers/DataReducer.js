import { DataActions, successActionOf, failureActionOf } from "../Actions";
var initialState = {
    //important data
    usersForApproval: [],

    //Bevarages for components
    loader: false,
    error: undefined,
    success: false
};

export default function DataReducer(state = initialState, action) {
    switch (action.type) {
        case DataActions.GET_USERS_FOR_APPROVAL:
            return { ...state, loader: true }
        case successActionOf(DataActions.GET_USERS_FOR_APPROVAL):
            return { ...state, loader: false, usersForApproval: action.payload };
        case failureActionOf(DataActions.GET_USERS_FOR_APPROVAL):
            return { ...state, loader: false, error: action.payload };

        case DataActions.HANDLE_USER_REQUEST:
            return { ...state, loader: true }
        case successActionOf(DataActions.HANDLE_USER_REQUEST):
            var arr = state.usersForApproval;
            var newarr = arr.filter((u, i) => u._id !== action.payload);
            return { ...state, loader: false, success: true, usersForApproval: newarr };
        case failureActionOf(DataActions.HANDLE_USER_REQUEST):
            return { ...state, loader: false, error: action.payload }
        default:
            return state;
    }
}
