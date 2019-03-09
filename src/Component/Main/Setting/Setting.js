import React from "react";
import { Redirect, withRouter} from "react-router-dom";

import "./Setting.css";

function Setting (props) {
    return (
        <div className="setting">
        if{!props.isAuth && props.history.push("/login")}

        <h2>Hello</h2>
        <Redirect to = "/login" />
        </div>

    )
}
export default withRouter(Setting);