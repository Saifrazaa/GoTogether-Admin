import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./index.css";

const screenHeight = window.screen.availHeight;
const screenWidth = window.screen.availWidth;

class NavBar extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <div style={{ display: "flex", width: screenWidth }}>
                        <div style={{ width: "80%"}}>
                            <Link to="/home" id="NavBarMenu">Home</Link>
                            <Link to="/users" id="NavBarMenu">Users</Link>
                            <Link to="/tracking" id="NavBarMenu">Tracking</Link>
                            <Link to="/journeys" id="NavBarMenu">Journeys</Link>
                            <Link to="/problems" id="NavBarMenu">Problems</Link>
                        </div>
                        <div style={{ width: "20%",textAlign:"center"}}>
                        <Link to="/problems" id="NavBarMenu">Logout</Link>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar;