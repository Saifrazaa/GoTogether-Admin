class AuthActions {
    static LOGIN = "LOGIN";
    static Login(payload) {
        return {
            type: this.LOGIN,
            payload
        }
    }
}
export default AuthActions;