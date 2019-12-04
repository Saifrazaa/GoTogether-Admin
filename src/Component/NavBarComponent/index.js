import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./index.css";

// const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;

class NavBar extends React.Component {
    render() {
        return (
            <AppBar position="static" style={{backgroundColor:"#030303",height:50}}>
                <Toolbar>
                    <div style={{ display: "flex", width: screenWidth }}>
                        <div style={{ width: "80%" }}>
                            <span onClick={() => this.props.onClickMenu(1)}><Link to="/home" id={this.props.activeMenu === 1 ? "ActiveMenu" : "NavBarMenu"}>Home</Link></span>
                            <span onClick={() => this.props.onClickMenu(2)}><Link to="/user-requests" id={this.props.activeMenu === 2 ? "ActiveMenu" : "NavBarMenu"}>Users Requests</Link></span>
                            <span onClick={() => this.props.onClickMenu(3)}><Link to="/tracking" id={this.props.activeMenu === 3 ? "ActiveMenu" : "NavBarMenu"}>Tracking</Link></span>
                            <span onClick={() => this.props.onClickMenu(4)}><Link to="/journeys" id={this.props.activeMenu === 4 ? "ActiveMenu" : "NavBarMenu"}>All Users</Link></span>
                            <span onClick={() => this.props.onClickMenu(5)}><Link to="/problems" id={this.props.activeMenu === 5 ? "ActiveMenu" : "NavBarMenu"}>Journeys</Link></span>
                            <span onClick={() => this.props.onClickMenu(6)}><Link to="/problems" id={this.props.activeMenu === 6 ? "ActiveMenu" : "NavBarMenu"}>Problems</Link></span>
                        </div>
                        <div style={{ width: "20%", textAlign: "center" }}>
                            <Link to="/problems" id="NavBarMenu">Logout</Link>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar;