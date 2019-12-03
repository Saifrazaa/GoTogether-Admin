import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    Home,
    Login
} from "../Container";

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}
