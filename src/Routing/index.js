import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {
    Home,
    Login,
    NavBar
} from "../Container";
const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Login} />
            <NavBar />
            <Route path="/home" component={Home} />
        </div>
    </Router>
);
export default AppRouter;