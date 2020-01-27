import { DataActions, successActionOf, failureActionOf } from "../Actions";
var initialState = {
    //important data
    usersForApproval: [],
    allUsers: [],
    onGoingRides: [],
    complains: [],

    //Bevarages for components
    loader: false,
    error: undefined,
    success: false,
};

export default function DataReducer(state = initialState, action) {
    switch (action.type) {

        //Get Users for Approval and Rejection
        case DataActions.GET_USERS_FOR_APPROVAL:
            return { ...state, loader: true }
        case successActionOf(DataActions.GET_USERS_FOR_APPROVAL):
            return { ...state, loader: false, usersForApproval: action.payload };
        case failureActionOf(DataActions.GET_USERS_FOR_APPROVAL):
            return { ...state, loader: false, error: action.payload };

        //Handle User Request
        case DataActions.HANDLE_USER_REQUEST:
            return { ...state, loader: true }
        case successActionOf(DataActions.HANDLE_USER_REQUEST):
            var arr = state.usersForApproval;
            var newarr = arr.filter((u, i) => u._id !== action.payload);
            return { ...state, loader: false, success: true, usersForApproval: newarr };
        case failureActionOf(DataActions.HANDLE_USER_REQUEST):
            return { ...state, loader: false, error: action.payload }

        //Get All Users Request
        case DataActions.GET_ALL_USERS:
            return { ...state, loader: true }
        case successActionOf(DataActions.GET_ALL_USERS):
            return { ...state, loader: false, allUsers: action.payload }
        case failureActionOf(DataActions.GET_ALL_USERS):
            return { ...state, loader: false, error: action.payload }

        //Handle User List Action
        case DataActions.HANDLE_USER_LIST_ACTION:
            return { ...state, loader: true }
        case successActionOf(DataActions.HANDLE_USER_LIST_ACTION):
            var allUsers = state.allUsers;
            var users = [];
            if (action.payload.action) {
                users = allUsers.filter((user) => user._id !== action.payload.userID)
            }
            else {
                users = allUsers.filter((user) => user._id !== action.payload._id)
                var u = allUsers.filter((user) => user._id === action.payload._id);
                u[0].status = action.payload.status;
                users.push(u[0]);
            }
            return { ...state, loader: false, allUsers: users }

        //get all on going ride for live tracking    
        case DataActions.GET_ALL_ONGOING_RIDES:
            return { ...state, loader: true };
        case successActionOf(DataActions.GET_ALL_ONGOING_RIDES):
            return { ...state, loader: false, onGoingRides: action.payload }
        case failureActionOf(DataActions.GET_ALL_ONGOING_RIDES):
            return { ...state, loader: false, error: action.payload };

        //get all complains about rides
        case DataActions.GET_ALL_COMPLAINS:
            return { ...state, loader: true };
        case successActionOf(DataActions.GET_ALL_COMPLAINS):
            return { ...state, loader: false, complains: action.payload };
        case failureActionOf(DataActions.GET_ALL_COMPLAINS):
            return { ...state, loader: false, error: action.payload }

        //handle action on complain solve
        case DataActions.HANDLE_ACTION_COMPLAIN:
            return { ...state, loader: true }
        case successActionOf(DataActions.HANDLE_ACTION_COMPLAIN):
            var complains = state.complains;
            var payload = JSON.parse(action.payload);
            var newComplains = complains.filter(ride => ride._id !== payload._id);
            return { ...state, loader: false, complains: newComplains, success: true }
        case failureActionOf(DataActions.HANDLE_ACTION_COMPLAIN):
            return { ...state, loader: false, error: action.error }

        //clear global status
        case DataActions.CLEAR_REDUCER:
            return { ...state, success: false, loader: false }
        default:
            return state;
    }
}
