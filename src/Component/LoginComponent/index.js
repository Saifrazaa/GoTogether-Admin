import React from "react";
import { TextField, Button } from '@material-ui/core';

import Background from "../../Assets/images/background.jpg";
import TitleLogo from "../../Assets/images/title.png";
import Loader from "../Loader";
import "./index.css";

var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth;
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: false,
            passwordError: false
        }
    }
    _handleChange(key, event) {
        this.setState({ [key]: event.target.value })
    }
    _handleClick = () => {
        const email = this.state.email;
        const password = this.state.password;
        if (email === "") {
            this.setState({ emailError: true })
        }
        else if (password === "") {
            this.setState({ passwordError: true })
        }
        else {
            this.props.loginHandle(this.state.email, this.state.password)
        }
    }
    render() {
        return (
            <div className="centerDiv" style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
                <div className="centerDiv" style={{ backgroundColor: "rgba(255,255,255,0.8)", height: screenHeight / 2, width: screenWidth / 2 }}>
                    <div>
                        <div style={{ textAlign: "center" }}>
                            <img src={TitleLogo} alt="Title" style={{ height: screenHeight / 10, width: screenWidth / 7 }} />
                        </div>
                        {this.props.error && <div style={{ marginTop: 20, textAlign: "center" }}>
                            <h5>{this.props.error}</h5>
                        </div>}
                        <div style={{ marginTop: 20 }}>
                            <TextField
                                required
                                onChange={this._handleChange.bind(this, "email")}
                                id={!this.state.error ? "outlined-basic" : "outlined-basic-error"}
                                label="Admin Email"
                                variant="outlined"
                                style={{ width: 300 }}
                                error={this.state.emailError}
                                helperText={this.state.emailError ? "Incorrect Entry" : ""}
                            />
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <TextField
                                required
                                onChange={this._handleChange.bind(this, "password")}
                                id="outlined-basic"
                                type="password"
                                label="Admin Password"
                                variant="outlined"
                                error={this.state.passwordError}
                                style={{ width: 300 }}
                                helperText={this.state.passwordError ? "Incorrect Entry" : ""}
                            />
                        </div>
                        <div style={{ marginTop: 20, textAlign: "center" }}>
                            <Button type="submit" variant="contained" color="secondary" onClick={this._handleClick.bind(this)}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
                {this.props.loader && <Loader />}
            </div>
        )
    }
}
export default LoginComponent;