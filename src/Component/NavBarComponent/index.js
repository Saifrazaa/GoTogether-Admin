import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./index.css";

// const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <AppBar position="static" style={{ backgroundColor: "#030303", height: 50 }}>
                <Toolbar>
                    <div style={{ display: "flex", width: screenWidth }}>
                        <div style={{ width: "80%" }}>
                            <span onClick={() => this.props.onClickMenu(1)}><Link to="/user-requests" id={this.props.activeMenu === 1 ? "ActiveMenu" : "NavBarMenu"}>Users Requests</Link></span>
                            <span onClick={() => this.props.onClickMenu(2)}><Link to="/tracking" id={this.props.activeMenu === 2 ? "ActiveMenu" : "NavBarMenu"}>Tracking</Link></span>
                            <span onClick={() => this.props.onClickMenu(3)}><Link to="/users-list" id={this.props.activeMenu === 3 ? "ActiveMenu" : "NavBarMenu"}>All Users</Link></span>
                            <span onClick={() => this.props.onClickMenu(4)}><Link to="/complains" id={this.props.activeMenu === 4 ? "ActiveMenu" : "NavBarMenu"}>Complains</Link></span>
                        </div>
                        {/* <div style={{ width: "20%", textAlign: "center" }}>
                            <Button onClick={()=>this.props.onPressLogout()} style={{color:"#ffffff",fontFamily:"Century Gothic",fontWeight: 600}}>
                                Log out
                            </Button>
                        </div> */}
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar;