import React, { Component } from "react";

import Background from "../../Assets/images/back.jpg";
import { screenHeight, screenWidth } from "../../Config";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "zubair",
    }
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>

      </div>
    );
  }
}

export default HomeComponent;
