import React from "react";
import { Button } from "@material-ui/core";

import { Loader } from "../index";
import { screenHeight, screenWidth } from "../../Config";
import Background from "../../Assets/images/back.jpg";
import { ConfirmDialog } from "../Extras";

export default class UsersListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            confirmDialog: false,
            action: "",
            userID: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.users) {
            this.setState({ users: nextProps.users })
        }
    }
    handleCancel() {
        this.setState({ confirmDialog: false, state: "" })
    }
    handleConfirm() {
        this.setState({ confirmDialog: false }, () => {
            this.props.handleUserAction({ userID: this.state.userID, action: this.state.action })
        })
    }
    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
                {this.props.loader && <Loader />}
                {this.state.confirmDialog && <ConfirmDialog
                    handleCancel={this.handleCancel.bind(this)}
                    handleConfirm={this.handleConfirm.bind(this)}
                    dialogTitle={"Confirmation"}
                    dialogMessage={"Are You Sure You Want To Do This?"}
                />}
                {(this.props.users && this.props.users.length > 0) &&
                    <table className="table table-bordered table-hover table-striped" style={{ width: "100%" }}>
                        <thead style={{ paddingTop: 10, backgroundColor: "#4EA7DE" }}>
                            <th style={{ color: "#fff" }}>No</th>
                            <th style={{ color: "#fff" }}>User Name</th>
                            <th style={{ color: "#fff" }}>Email</th>
                            <th style={{ color: "#fff" }}>Phone</th>
                            <th style={{ color: "#fff" }}>Status</th>
                            <th style={{ color: "#fff" }}>Actions</th>
                        </thead>
                        {this.props.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ color: "#fff" }}>{index + 1}</td>
                                    <td style={{ color: "#fff" }}>{user.username}</td>
                                    <td style={{ color: "#fff" }}>{user.email}</td>
                                    <td style={{ color: "#fff" }}>{user.phone}</td>
                                    <td style={{ color: "#fff" }}>{user.status}</td>
                                    <td>
                                        <Button onClick={() => this.setState({ confirmDialog: true, userID: user._id, action: "delete" })} variant="contained" color="secondary">
                                            Delete
                                        </Button>
                                        {user.status === "banned" &&
                                            <Button onClick={() => this.setState({ confirmDialog: true, userID: user._id, action: "permit" })} variant="contained" style={{ marginLeft: 10 }}>
                                                Permit
                                            </Button>
                                            ||
                                            <Button onClick={() => this.setState({ confirmDialog: true, userID: user._id, action: "ban" })} variant="contained" color="primary" style={{ marginLeft: 10 }}>
                                                Ban
                                        </Button>}
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </table>
                    ||
                    <div className="centerDiv" style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "Century Gothic",fontSize:30,fontWeight:"bold",color:"#fff" }}>
                            No User Found
                        </div>
                    </div>
                }
            </div>
        )
    }
}