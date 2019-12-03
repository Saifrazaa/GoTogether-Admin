import React from "react";
import { LoginComponent } from "../../Component";
import { AuthActions } from "../../Store/actions";
import { connect } from "../../Store";
class Login extends React.Component {
    _loginHandle(event, email, password) {
        var payload = {
            email,
            password
        }
        this.props.login(payload);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.success){
            nextProps.history.push("/home")
        }
    }
    render() {
        return (
            <LoginComponent
                loginHandle={(email, password) => this._loginHandle(this, email, password)}
                loader={this.props.loader}
                error={this.props.error}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loader: state.AuthReducer.loader,
        success: state.AuthReducer.success,
        error: state.AuthReducer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (payload) => dispatch(AuthActions.Login(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);