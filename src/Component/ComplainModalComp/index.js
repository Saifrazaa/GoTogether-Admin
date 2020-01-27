import React from "react";
import { Button } from "@material-ui/core";

import { screenHeight, screenWidth } from "../../Config";
export default class ComplainModalComp extends React.Component {
    render() {
        var complain = this.props.complain;
        return (
            <div className="centerDiv" style={{ position: "absolute", height: screenHeight, width: "100%", backgroundColor: "rgba(0,0,0,0.8)" }}>
                <div style={{ height: "70%", width: "90%", backgroundColor: "#ffffff",borderRadius:10 }}>
                    <div style={{ height: "10%", width: "100%", textAlign: "center", justifyContent: "center", fontWeight: "bold", fontFamily: "Century Gothic", fontSize: 30, paddingTop: 5, borderBottom: "5px solid black" }}>
                        User Complains
                    </div>
                    <div style={{ height: "80%", width: "100%", overflow: "scroll" }}>
                        {complain && complain.complains && complain.complains.map((comp) => {
                            var user = complain.bookedUsers.find(user => user.userID === comp.userID);
                            console.log("user", user);
                            return (
                                <div style={{ height: "40%", width: "100%", borderBottom: "2px solid black" }}>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "10%", fontWeight: "bold", fontSize: 15 }}>User Name : </div>
                                        <div style={{ width: "90%", fontFamily: "Century Gothic", fontSize: 20 }}>{user.username}</div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "10%", fontWeight: "bold", fontSize: 15 }}>User Email : </div>
                                        <div style={{ width: "90%", fontFamily: "Century Gothic", fontSize: 20 }}>{user.email}</div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "10%", fontWeight: "bold", fontSize: 15 }}>User Mobile : </div>
                                        <div style={{ width: "90%", fontFamily: "Century Gothic", fontSize: 20 }}>{user.mobileNo}</div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ width: "10%", fontWeight: "bold", fontSize: 15 }}>User Complain : </div>
                                        <div style={{ fontFamily: "Century Gothic", fontSize: 20, maxWidth: "90%" }}>{comp.complain}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{ height: "10%", width: "100%", textAlign: "center" }}>
                        <Button onClick={()=>this.props.onClickWarnDriver()} variant="contained" color="primary" style={{marginRight:10}}>
                            Warn Driver
                        </Button>
                        <Button onClick={()=>this.props.onClickBanDriver()} variant="contained" color="secondary">
                            Ban Driver
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}