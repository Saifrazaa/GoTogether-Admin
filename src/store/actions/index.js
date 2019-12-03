import AppActions from "./AppActions";
import AuthActions from "./AuthActions";
const successActionOf = (action) => {
    return `${action}_SUCCESS`;
}
const failureActionOf = (action) => {
    return `${action}_FAILURE`;
}
export {
    AppActions,
    AuthActions,
    successActionOf,
    failureActionOf
};
