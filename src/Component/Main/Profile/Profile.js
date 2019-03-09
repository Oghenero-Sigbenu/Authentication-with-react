import React from  "react";
import {Redirect, withRouter} from "react-router-dom";

import "./Profile.css";

const Profile = (props) => {
   
    return (
        <div className="profile">
        if{!props.isAuth && props.history.push("/login")}
       <h2>Hello</h2>
       <Redirect to = "/login" />
        </div>
     
    )
};
export default withRouter(Profile);