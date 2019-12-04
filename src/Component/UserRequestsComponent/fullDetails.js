import React from "react";
import { Divider, Button, Dialog, DialogActions, DialogTitle, DialogContentText, DialogContent } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import ConfirmDialog from "../Extras/ConfirmDialog";
export default class FullDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDialog: false,
            status: ""
        }
    }
    handleClick(status) {
        this.setState({ confirmDialog: true, status })
    }
    handleCancel() {
        this.setState({ confirmDialog: false, state: "" })
    }
    handleConfirm() {
        this.props.handleUserRequest({ userID: this.props.user._id, status: this.state.status })
    }
    render() {
        var user = this.props.user;
        return (
            <div className="centerDiv" style={{ height: "100%", width: "100%", position: "absolute", backgroundColor: "rgba(0,0,0,0.8)", textAlign: "center" }}>
                {this.state.confirmDialog && <ConfirmDialog
                    handleCancel={this.handleCancel.bind(this)}
                    handleConfirm={this.handleConfirm.bind(this)}
                    dialogTitle={"Confirmation"}
                    dialogMessage={"Are You Sure You Want To Do This?"}
                />}
                <div style={{ height: "90%", width: "95%", backgroundColor: "#fff", borderRadius: 5 }}>
                    {/* personal details */}
                    <div style={{ textAlign: "right", cursor: "pointer", height: "7%" }} onClick={() => this.props.closeModal()}>
                        <CloseIcon style={{ backgroundColor: "red", color: "#fff" }} />
                    </div>
                    <div style={{ height: "93%", width: "100%", overflow: "scroll" }}>
                        <div style={{ textAlign: "center", flexDirection: "row" }}>
                            <h3 style={{ fontFamily: "Century Gothic", fontWeight: "bold" }}>Personal Details</h3>
                        </div>
                        <table className="table table-hover table-striped">
                            <thead>
                                <th style={{ fontFamily: "Century Gothic" }}>Name</th>
                                <th style={{ fontFamily: "Century Gothic" }}>Email</th>
                                <th style={{ fontFamily: "Century Gothic" }}>CNIC No</th>
                                <th style={{ fontFamily: "Century Gothic" }}>Phone</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.username}</td>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.email}</td>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.cnic}</td>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Divider />
                        <div style={{ padding: 20, fontFamily: "Century Gothic", fontSize: 20 }}>
                            Address : <h5>{user.address}</h5>
                        </div>
                        <Divider />
                        <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontFamily: "Century Gothic", fontWeight: "bold" }}>Security Details</h3>
                        </div>
                        <Divider />
                        <div style={{ margin: 10, textAlign: "center" }}>
                            <h5 style={{ fontFamily: "Century Gothic", fontWeight: "bold", padding: 20 }}>CNIC Front Picture</h5>
                            <img src={"https://cdn.mangobaaz.com/wp-content/uploads/2017/11/chinese-man-cnic-cover.jpg"} alt="CNIC Front Side" style={{ height: "30%", width: "70%" }} />
                        </div>
                        <Divider />
                        <div style={{ margin: 10, textAlign: "center" }}>
                            <h5 style={{ fontFamily: "Century Gothic", fontWeight: "bold", padding: 20 }}>CNIC Back Picture</h5>
                            <img src={"https://cdn.mangobaaz.com/wp-content/uploads/2017/11/chinese-man-cnic-cover.jpg"} alt="CNIC Front Side" style={{ height: "30%", width: "70%" }} />
                        </div>
                        <Divider />
                        <div style={{ margin: 10, textAlign: "center" }}>
                            <h5 style={{ fontFamily: "Century Gothic", fontWeight: "bold", padding: 20 }}>Driving License Front Picture</h5>
                            <img src={"https://cdn.mangobaaz.com/wp-content/uploads/2017/11/chinese-man-cnic-cover.jpg"} alt="CNIC Front Side" style={{ height: "30%", width: "70%" }} />
                        </div>
                        <Divider />
                        <div style={{ margin: 10, textAlign: "center" }}>
                            <h5 style={{ fontFamily: "Century Gothic", fontWeight: "bold", padding: 20 }}>Driving License Back Picture</h5>
                            <img src={"https://cdn.mangobaaz.com/wp-content/uploads/2017/11/chinese-man-cnic-cover.jpg"} alt="CNIC Front Side" style={{ height: "30%", width: "70%" }} />
                        </div>
                        <Divider />
                        <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontFamily: "Century Gothic", fontWeight: "bold" }}>Vehicle Details</h3>
                        </div>
                        <Divider />
                        <table className="table table-hover table-striped">
                            <thead>
                                <th style={{ fontFamily: "Century Gothic" }}>Vehicle Company</th>
                                <th style={{ fontFamily: "Century Gothic" }}>Vehicle Name</th>
                                <th style={{ fontFamily: "Century Gothic" }}>Vehicle Modal</th>
                                <th style={{ fontFamily: "Century Gothic" }}>Vehicle Color</th>
                                <th style={{ fontFamily: "Century Gothic" }}>Vehicle Number</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.vehicleCompany}</td>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.vehicleName}</td>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.vehicleModal}</td>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.vehicleColor}</td>
                                    <td style={{ fontFamily: "Century Gothic" }}>{user.Number}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Divider />
                        <div style={{ flexDirection: "column", textAlign: "center" }}>
                            <Button variant="contained" color="secondary" onClick={this.handleClick.bind(this, "reject")} style={{ width: "60%", marginTop: 10 }}>
                                Reject User Request
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.handleClick.bind(this, "approve")} style={{ width: "60%", marginTop: 10 }}>
                                Approve User Request
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}