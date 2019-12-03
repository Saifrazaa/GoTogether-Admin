import AppActions from "./AppActions";
import AuthActions from "./AuthActions";
import DataActions from "./DataActions";

const successActionOf = (action) => {
    return `${action}_SUCCESS`;
}
const failureActionOf = (action) => {
    return `${action}_FAILURE`;
}
export {
    AppActions,
    AuthActions,
    DataActions,

    successActionOf,
    failureActionOf
};
