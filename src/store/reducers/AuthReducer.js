import { AuthActions, successActionOf, failureActionOf } from "../Actions";
var initialState = {
    user: false,
    loader: false,
    error: undefined,
    success: false
};

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case AuthActions.LOGIN:
            return { ...state, loader: true };
        case successActionOf(AuthActions.LOGIN):
            return { ...state, loader: false, success: true, user: true }
        case failureActionOf(AuthActions.LOGIN):
            return { ...state, loader: false, error: action.payload }
        default:
            return state;
    }
}
