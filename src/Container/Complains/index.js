import React from "react";
import { Button } from "@material-ui/core";

import { screenHeight, screenWidth } from "../../Config";
import Background from "../../Assets/images/back.jpg";
import { connect } from "../../Store";
import { Loader, ComplainModalComp } from "../../Component";
import { DataActions } from "../../Store/Actions";

class Complains extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complains: [],
            complain: {},
            complainModal: false
        }
        props.getAllComplains();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.complains) {
            this.setState({ complains: nextProps.complains });
        }
        if (nextProps && nextProps.success) {
            alert("Successfully Solve Complain");
            nextProps.clearReducer();
        }
    }
    dateFormation = (input) => {
        var date = new Date(input);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + "/" + month + "/" + year;
    }
    handleActionClick(action) {
        var complain = this.state.complain;
        this.setState({ complainModal: false, complain: {} }, () => {
            this.props.handleComplainAction({ action, complain: JSON.stringify(complain) });
        })
    }
    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
                {this.state.complainModal && <ComplainModalComp
                    complain={this.state.complain}
                    onClickWarnDriver={this.handleActionClick.bind(this, "warn")}
                    onClickBanDriver={this.handleActionClick.bind(this, "ban")}
                />
                }
                {this.props.loader && <Loader /> || <div >
                    {this.state.complains && this.state.complains.length > 0 ?
                        <table className="table table-bordered table-hover table-striped">
                            <thead style={{ backgroundColor: "#4EA7DE" }}>
                                <th>No</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Ride Date</th>
                                <th>Overall Rating</th>
                                <th>Action</th>
                            </thead>
                            {this.state.complains.map((complain, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ color: "#fff" }}>{index + 1}</td>
                                        <td style={{ color: "#fff" }}>{complain.from.city}</td>
                                        <td style={{ color: "#fff" }}>{complain.to.city}</td>
                                        <td style={{ color: "#fff" }}>{this.dateFormation(complain.date)}</td>
                                        <td style={{ color: "#fff" }}>{complain.overallRating}</td>
                                        <td>
                                            <button onClick={() => this.setState({ complainModal: true, complain })} variant="contained" color="primary" style={{ marginLeft: 10, height: 40, borderRadius: 5, backgroundColor: "#C70039", color: "#ffffff", fontWeight: "bold" }}>
                                                View Complains
                                            </button>
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
        success: state.DataReducer.success,
        user: state.AuthReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllComplains: () => dispatch(DataActions.getAllComplains()),
        handleComplainAction: (payload) => dispatch(DataActions.handleComplainAction(payload)),
        clearReducer: () => dispatch(DataActions.clearReducer())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Complains);