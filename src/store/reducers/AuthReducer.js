import { AuthActions, successActionOf, failureActionOf } from "../actions";
var initialState = {
    user: null,
    loader: false,
    error: undefined,
    success: false
};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case AuthActions.LOGIN:
            return { ...state, loader: true };
        case successActionOf(AuthActions.LOGIN):
            return { ...state, loader: false, success: true, user: action.payload }
        case failureActionOf(AuthActions.LOGIN):
            return { ...state, loader: false, error: action.payload }
        default:
            return state;
    }
}
