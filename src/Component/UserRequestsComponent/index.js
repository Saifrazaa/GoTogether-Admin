import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Background from "../../Assets/images/back.jpg";
import { screenHeight, screenWidth } from "../../Config";

class UserRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.usersForApproval
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.usersForApproval) {
      this.setState({ users: nextProps.usersForApproval })
    }
  }
  render() {
    console.log(this.state.users)
    return (
      <div style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
        <Grid container xs={12}>
          <table className="table table-hover table-striped" style={{ marginTop: 10, width: "100%" }}>
            <thead style={{ backgroundColor: "#4EA7DE" }}>
              <th style={{ color: "#fff", padding: "20px" }}>Number</th>
              <th style={{ color: "#fff", padding: "20px" }}>User Name</th>
              <th style={{ color: "#fff", padding: "20px" }}>Phone Number</th>
              <th style={{ color: "#fff", padding: "20px" }}>Email Address</th>
              <th style={{ color: "#fff", padding: "20px" }}>CNIC</th>
              <th style={{ color: "#fff", padding: "20px" }}>Actions 1</th>
              <th style={{ color: "#fff", padding: "20px" }}>Actions 2</th>
            </thead>
            <tbody style={{backgroundColor:"rgba(255,255,255,0.7)"}}>
              {this.state.users && this.state.users.map((user, index) => {
                return (
                  <tr>
                    <td style={{ color: "black" }}>{index + 1}</td>
                    <td style={{ color: "black" }}>{user.username && user.username}</td>
                    <td style={{ color: "black" }}>{user.phone && user.phone}</td>
                    <td style={{ color: "black" }}>{user.email && user.email}</td>
                    <td style={{ color: "black" }}>{user.cnic && user.cnic}</td>
                    <td style={{ color: "black" }}>See Full Details</td>
                    <td></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Grid>
      </div>
    );
  }
}

export default UserRequests;
