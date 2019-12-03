import React, { Component } from "react";
import "./App.css";
import { store } from "./Store";
import { Provider } from "react-redux";
import Routing from "./Routing";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

export default App;
