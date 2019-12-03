import React from "react";

import { screenHeight, screenWidth } from "../../Config";
import TitleLogo from "../../Assets/images/title.png";
import "./index.css";
export default class Loader extends React.Component {
    render() {
        return (
            <div className="centerDiv" style={{ position: "absolute", height: screenHeight, width: screenWidth, backgroundColor: "rgba(255,255,255,0.8)" }}>
                <img src={TitleLogo} alt="Loader" className="rotate" />
            </div>
        )
    }
}