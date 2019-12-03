import axios from 'axios';

export default class AppActions {
  static CLICKED = "CLICKED";
  static GETDATA = "GETDATA"
  static GET_DATA_FAILURE = "GET_DATA_FAILURE"
  static APPROVED = "APPROVED"
  static APPROVED_FAILURE = "APPROVED_FAILURE"

  static buttonClicked(payload) {
    console.log(payload)
    return {
      type: AppActions.CLICKED,
      payload: payload
    };
  }

  // static getData(payload) {
  //   return {
  //     type: AppActions.GETDATA,
  //     payload
  //   };
  // }
  static getData = (payload) => {

    return dispatch => {
      // console.log(payload)
      axios.get(`http://localhost:5000/auth/allusers`)
        .then(res => {

          const fetchdata = res.data.allusers;
          if (fetchdata && fetchdata.length > 0) {
            dispatch({
              type: AppActions.GETDATA,
              payload: fetchdata
            })
          }
          else {
            dispatch({
              type: AppActions.GET_DATA_FAILURE,
              payload: "No Data Found"
            })
          }
        }).catch(err => {
          dispatch({
            type: AppActions.GET_DATA_FAILURE,
            payload: "Network Error"
          })
        })
    }
  }

  static approvedRequest(payload) {
    return dispatch => {
      axios.post(`http://localhost:5000/auth/adminApproved`, payload)
        .then(response => {
          if (response && response.data && response.data.success) {
            dispatch({
              type: AppActions.APPROVED,
              payload:payload.userID
            })
          }
          else {
            dispatch({
              type: AppActions.APPROVED_FAILURE,
              payload: "No Data Found"
            })
          }
        }).catch(err => {
          dispatch({
            type: AppActions.APPROVED_FAILURE,
            payload: "Network Error"
          })
        })
    }
  }
}
