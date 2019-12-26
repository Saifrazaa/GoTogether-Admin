import React from "react";
import { NavBarComponent } from "../../Component"
import { connect } from "../../Store";
import { AppActions } from "../../Store/Actions";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(props)
    }
    _onClickMenu(menu) {
        this.props.onChangeMenu(menu)
    }
    render() {
        return (
            <div>
                {this.props.user && <NavBarComponent activeMenu={this.props.activeMenu} onClickMenu={this._onClickMenu.bind(this)} onPressLogout={() => this.props.history.push("/")} />}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        activeMenu: state.AppReducer.activeMenu,
        user: state.AuthReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMenu: (payload) => dispatch(AppActions.onChangeMenu(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);