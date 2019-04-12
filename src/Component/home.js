import React, { Component } from "react";
import { AppActions } from "../store/actions";
import { connect } from "react-redux";
class Home extends Component {
  constructor() {
    super();
  }
update(){
  var ss={
    name:"zubair",
    id:"4444444"
  }
  this.props.buttonClicked(ss)
}

  render() {
    return (
      <div>
        <button
          onClick={this.update.bind(this)}
        >
          click to change
        </button>

        <h1>
          {" "}
          {this.props.name} and my id is {this.props.id}{" "}
        
        </h1>
      </div>
    );
  }
}
function mapState(state) {
  return {
    name: state.AppReducer.name,
    id: state.AppReducer.id,

    
  };
}
function mapDispatch(dispatch) {
  return {
    buttonClicked: payload => {
      dispatch(AppActions.buttonClicked(payload));
    }
  };
}
export default connect(
  mapState,
  mapDispatch
)(Home);
