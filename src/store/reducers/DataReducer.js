import { DataActions, successActionOf, failureActionOf } from "../Actions";
var initialState = {
    //important data
    usersForApproval: [],

    //Bevarages for components
    loader: false,
    error:undefined
};

export default function DataReducer(state = initialState, action) {
    switch (action.type) {
        case DataActions.GET_USERS_FOR_APPROVAL:
            return { ...state, loader: true }
        case successActionOf(DataActions.GET_USERS_FOR_APPROVAL):
            console.log("data reducer",action.payload)
            return { ...state, loader: false, usersForApproval: action.payload };
        case failureActionOf(DataActions.GET_USERS_FOR_APPROVAL):
            return { ...state, loader: false, error: action.payload }
        default:
            return state;
    }
}
