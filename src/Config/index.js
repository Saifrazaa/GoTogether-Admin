import Styles from "./style";
// const __DEV__ = process.env.REACT_APP__DEV__; //process.env.NODE_ENV === 'development'
// const serverUrl = (__DEV__) ? "http://localhost:8000" : null;

const serverUrl = "http://localhost:8000"
const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;

export {
    Styles,
    serverUrl,
    screenHeight,
    screenWidth
};