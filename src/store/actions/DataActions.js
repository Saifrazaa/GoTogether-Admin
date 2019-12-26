export default class DataActions {
    static GET_USERS_FOR_APPROVAL = "GET_USERS_FOR_APPROVAL";
    static HANDLE_USER_REQUEST = "HANDLE_USER_REQUEST";
    static GET_ALL_USERS = "GET_ALL_USERS";
    static HANDLE_USER_LIST_ACTION = "HANDLE_USER_LIST_ACTION";
    static GET_ALL_ONGOING_RIDES = "GET_ALL_ONGOING_RIDES";

    static getUsersForApproval(payload) {
        return {
            type: this.GET_USERS_FOR_APPROVAL,
            payload
        }
    }
    static handleUserRequest(payload) {
        return {
            type: this.HANDLE_USER_REQUEST,
            payload
        }
    }
    static getAllUsers() {
        return {
            type: this.GET_ALL_USERS
        }
    }
    static handleUserListAction(payload) {
        return {
            type: this.HANDLE_USER_LIST_ACTION,
            payload
        }
    }
    static getAllOnGoingJourneys() {
        return {
            type: this.GET_ALL_ONGOING_RIDES
        }
    }
}
