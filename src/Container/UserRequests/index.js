import React from "react";

import { DataActions } from "../../Store/Actions";
import { UserRequestsComponent } from "../../Component";
import { connect } from "../../Store";

class UserRequests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        props.getUsersForApproval();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.usersForApproval) {
            this.setState({ users: nextProps.usersForApproval })
        }
    }
    render() {
        console.log("state compo",this.state.users)
        return (
            <UserRequestsComponent
                usersForApproval={this.state.users}
                error={this.props.error}
                loader={this.props.loader}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usersForApproval: state.DataReducer.usersForApproval,
        loader: state.DataReducer.loader,
        error: state.DataReducer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsersForApproval: () => dispatch(DataActions.getUsersForApproval())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserRequests);