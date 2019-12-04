export default class DataActions {
    static GET_USERS_FOR_APPROVAL = "GET_USERS_FOR_APPROVAL";
    static HANDLE_USER_REQUEST = "HANDLE_USER_REQUEST";

    static getUsersForApproval(payload) {
        return {
            type: this.GET_USERS_FOR_APPROVAL,
            payload
        }
    }
    static handleUserRequest(payload){
        return {
            type:this.HANDLE_USER_REQUEST,
            payload
        }
    }
}
