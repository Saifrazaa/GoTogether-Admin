import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import Home from "./Component/home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
