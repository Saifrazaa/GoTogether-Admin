import React from "react";
import { Button } from "@material-ui/core";


import { DataActions } from "../../Store/Actions";
import { Loader, CurrentRideLocation } from "../../Component";
import { screenHeight, screenWidth } from "../../Config";
import Background from "../../Assets/images/back.jpg";
import { connect } from "../../Store";

class Tracking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            onGoingRides: props.onGoingRides || []
        }
        props.getAllOnGoingJourneys();
        // if (!props.user) {
        //     this.props.history.push("/")
        // }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.onGoingRides) {
            this.setState({ onGoingRides: nextProps.onGoingRides })
        }
    }
    render() {
        console.log("props", this.props);
        return (
            <div style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
                {this.props.loader && <Loader /> || <div>
                    {this.state.onGoingRides && this.state.onGoingRides.length > 0 &&
                        <table className="table table-bordered table-hover table-striped">
                            <thead style={{ backgroundColor: "#4EA7DE" }}>
                                <th>No</th>
                                <th>Going From</th>
                                <th>Going To</th>
                                <th>Driver Email</th>
                                <th>Action</th>
                            </thead>
                            {this.state.onGoingRides.map((ride, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ color: "#fff" }}>{index + 1}</td>
                                        <td style={{ color: "#fff" }}>{ride.from.city}</td>
                                        <td style={{ color: "#fff" }}>{ride.to.city}</td>
                                        <td style={{ color: "#fff" }}>{ride.driverEmail}</td>
                                        {/* <td style={{ color: "#fff" }}>{user.status}</td> */}
                                        <td>
                                            <Button onClick={() => this.props.history.push("/current-ride-location", { latitude: ride.currentLatitude, longitude: ride.currentLongitude, user: this.state.user })} variant="contained" color="primary" style={{ marginLeft: 10 }}>
                                                Track
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    }
                </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loader: state.DataReducer.loader,
        error: state.DataReducer.error,
        onGoingRides: state.DataReducer.onGoingRides,

        user: state.AuthReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllOnGoingJourneys: () => dispatch(DataActions.getAllOnGoingJourneys()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tracking);