import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {
    Home,
    Login,
    NavBar,
    UserRequests,
    UsersList
} from "../Container";
const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Login} />
            <NavBar />
            <Route path="/home" component={Home} />
            <Route path="/user-requests" component={UserRequests} />
            <Route path="/users-list" component={UsersList} />
        </div>
    </Router>
);
export default AppRouter;