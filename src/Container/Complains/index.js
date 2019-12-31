import React from "react";
import { Button } from "@material-ui/core";

import { screenHeight, screenWidth } from "../../Config";
import Background from "../../Assets/images/back.jpg";
import { connect } from "../../Store";
import { Loader } from "../../Component";
import { DataActions } from "../../Store/Actions";

class Complains extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complains: []
        }
        props.getAllComplains();
    }
    componentWillReceiveProps(nextProps) {
        console.log("next Props", nextProps);
        if (nextProps && nextProps.complains) {
            this.setState({ complains: nextProps.complains });
        }
    }
    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
                {this.props.loader && <Loader /> || <div >
                    {this.state.complains && this.state.complains.length > 0 ?
                        <table className="table table-bordered table-hover table-striped">
                            <thead style={{ backgroundColor: "#4EA7DE" }}>
                                <th>No</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Driver Email</th>
                                <th>Action</th>
                            </thead>
                            {this.state.complains.map((complain, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ color: "#fff" }}>{index + 1}</td>
                                        <td style={{ color: "#fff" }}>{complain.from.city}</td>
                                        <td style={{ color: "#fff" }}>{complain.to.city}</td>
                                        <td style={{ color: "#fff" }}>{complain.driverEmail}</td>
                                        {/* <td style={{ color: "#fff" }}>{user.status}</td> */}
                                        <td>
                                            <Button variant="contained" color="primary" style={{ marginLeft: 10 }}>
                                                Track
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                        :
                        <div />
                    }
                    <div />
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
        complains: state.DataReducer.complains,

        user: state.AuthReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllComplains: () => dispatch(DataActions.getAllComplains()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Complains);