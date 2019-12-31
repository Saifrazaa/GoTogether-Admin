import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {
    Login,
    NavBar,
    UserRequests,
    UsersList,
    Tracking,
    CurrentRideLocation,
    Complains
} from "../Container";
const AppRouter = () => (
    <Router>
        <div>
            <NavBar />
            <Route path="/" exact component={Login} />
            <Route path="/user-requests" component={UserRequests} />
            <Route path="/users-list" component={UsersList} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/current-ride-location" component={CurrentRideLocation} />
            <Route path="/complains" component={Complains} />
        </div>
    </Router>
);
export default AppRouter;