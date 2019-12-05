import React from "react";
import { UserListComponent } from "../../Component";
import { connect } from "../../Store";
import { DataActions } from "../../Store/Actions";
class UsersList extends React.Component {
    constructor(props) {
        super(props);
        props.getAllUsers();
    }
    handleUserAction(payload) {
        this.props.handleUserListAction(payload);
    }
    render() {
        return (
            <UserListComponent
                users={this.props.allUsers}
                loader={this.props.loader}
                error={this.props.error}
                handleUserAction={this.handleUserAction.bind(this)}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allUsers: state.DataReducer.allUsers,
        loader: state.DataReducer.loader,
        error: state.DataReducer.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(DataActions.getAllUsers()),
        handleUserListAction: (payload) => dispatch(DataActions.handleUserListAction(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);