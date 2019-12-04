import React, { Component } from "react";
import { Grid, Fab, Button } from "@material-ui/core";

import { Loader } from "../../Component";
import Background from "../../Assets/images/back.jpg";
import { screenHeight, screenWidth } from "../../Config";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import FullDetails from "./fullDetails";
import ConfirmDialog from "../Extras/ConfirmDialog";

class UserRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.usersForApproval,
      detailsModal: false,
      userForModal: null,
      confirmDialog: false,
      status: "",
      userID: ""
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.usersForApproval) {
      this.setState({ users: nextProps.usersForApproval })
    }
  }
  handleClick(status, userID) {
    this.setState({ confirmDialog: true, status, userID })
  }
  handleCancel() {
    this.setState({ confirmDialog: false, state: "" })
  }
  handleUserRequest(payload) {
    this.setState({ detailsModal: false }, () => {
      this.props.handleUserRequest(payload)
    })
  }
  handleConfirm() {
    this.setState({ confirmDialog: false }, () => {
      this.handleUserRequest({ userID: this.state.userID, status: this.state.status })
    })
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
        {this.state.detailsModal && <FullDetails
          user={this.state.userForModal}
          closeModal={() => this.setState({ detailsModal: false })}
          handleUserRequest={this.handleUserRequest.bind(this)}
        />}
        {this.state.confirmDialog && <ConfirmDialog
          handleCancel={this.handleCancel.bind(this)}
          handleConfirm={this.handleConfirm.bind(this)}
          dialogTitle={"Confirmation"}
          dialogMessage={"Are You Sure You Want To Do This?"}
        />}
        {this.props.loader && <Loader />}
        {/* <Grid container xs={12}> */}
          {(this.state.users && this.state.users.length > 0) &&
            <table className="table table-hover table-striped" style={{ paddingTop: 10, width: "100%" }}>
              <thead style={{ backgroundColor: "#4EA7DE" }}>
                <th style={{ color: "#fff", padding: "20px" }}>Number</th>
                <th style={{ color: "#fff", padding: "20px" }}>User Name</th>
                <th style={{ color: "#fff", padding: "20px" }}>Phone Number</th>
                <th style={{ color: "#fff", padding: "20px" }}>Email Address</th>
                <th style={{ color: "#fff", padding: "20px" }}>CNIC</th>
                <th style={{ color: "#fff", padding: "20px" }}>Actions 1</th>
                <th style={{ color: "#fff", padding: "20px" }}>Actions 2</th>
              </thead>
              <tbody style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
                {this.state.users && this.state.users.map((user, index) => {
                  return (
                    <tr>
                      <td style={{ color: "black" }}>{index + 1}</td>
                      <td style={{ color: "black" }}>{user.username && user.username}</td>
                      <td style={{ color: "black" }}>{user.phone && user.phone}</td>
                      <td style={{ color: "black" }}>{user.email && user.email}</td>
                      <td style={{ color: "black" }}>{user.cnic && user.cnic}</td>
                      <td style={{ color: "black", cursor: "pointer" }} onClick={() => this.setState({ detailsModal: true, userForModal: user })}>See Full Details</td>
                      <td>
                        <button onClick={this.handleClick.bind(this, "reject", user._id)} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: "#FB1E46", borderColor: "#fff" }}>
                          <CloseIcon style={{ color: "#fff" }} />
                        </button>
                        <button onClick={this.handleClick.bind(this, "approve", user._id)} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: "#33C142", marginLeft: 5 }}>
                          <CheckIcon style={{ color: "#fff" }} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            ||
            <center className="centerDiv" style={{color:"#fff",fontSize:"30px",fontFamily:"Century Gothic",fontWeight:"bold"}}>No User Found</center>
          }
        {/* </Grid> */}
      </div>
    );
  }
}

export default UserRequests;
