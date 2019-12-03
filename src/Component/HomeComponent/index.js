import React, { Component } from "react";
import { AppActions } from "../../Store/actions";

import { connect } from "react-redux";
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "zubair",

    }
    props.getData();
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops && nextprops.fetchdata) {
      this.setState({ data: nextprops.fetchdata })
    }
  }
  approved = (data) => {
    this.props.approvedRequest({ userID: data._id })
  }
  render() {
    return (
      <div>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">username</th>
              <th scope="col">profile pic</th>
              <th scope="col">email</th>
              <th scope="col">password</th>
              <th scope="col">Mobile no</th>
              <th scope="col">CNIC</th>
              <th scope="col">Address</th>
              <th scope="col">Vehicle Company</th>
              <th scope="col">Vehicle Name</th>
              <th scope="col">Vehicle Model</th>
              <th scope="col">Vehicle Color</th>
              <th scope="col">Vehicle number</th>
              <th scope="col">Cnic pic front</th>
              <th scope="col">Cnic pic back</th>
              <th scope="col">Licence type</th>
              <th scope="col">Licence front pic</th>
              <th scope="col">Licence Back pic</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) => {
              return (
                <tr key={data}>

                  <td>{data.username}</td>
                  <td>{data.profilePicture}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>{data.phone}</td>
                  <td>{data.cnic}</td>
                  <td>{data.address}</td>
                  <td>{data.vehicleCompany}</td>
                  <td>{data.vehicleName}</td>
                  <td>{data.vehicleModal}</td>
                  <td>{data.vehicleColor}</td>
                  <td>{data.vehicleNumber}</td>
                  <td>{data.CNIC_front_picture}</td>
                  <td>{data.CNIC_back_picture}</td>
                  <td>{data.license_type}</td>
                  <td>{data.CNIC_front_picture}</td>
                  <td>{data.CNIC_back_picture}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={this.approved.bind(this, data)}
                    >
                      Approved
                      </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        this.props.history.push("/")
                      }
                    >
                      Reject
                      </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    );
  }
}
function mapState(state) {

  return {
    fetchdata: state.AppReducer.fetch,


  };
}
function mapDispatch(dispatch) {
  return {

    getData: () => {
      dispatch(AppActions.getData())
    },
    approvedRequest: (payload) => {
      dispatch(AppActions.approvedRequest(payload))
    },
  };
}
export default connect(
  mapState,
  mapDispatch
)(Home);
