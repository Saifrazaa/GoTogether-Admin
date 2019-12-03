export default class DataActions {
    static GET_USERS_FOR_APPROVAL = "GET_USERS_FOR_APPROVAL";
    
    static getUsersForApproval(payload) {
        return {
            type: this.GET_USERS_FOR_APPROVAL,
            payload
        }
    }
}
