import React from "react";

import "./Login.css";
function Login (props){

    return (
        <div className="form">
        <div className="login">
        <label name="user" className="lab">Username</label>
        <input type="text" name="user" onChange={props.nameC }/>
        <label name="user" className="lab">Password</label>
        <input type="password" name="pass" onChange={props.passW } ></input>
        <button disabled={props.user === ""  && props.pass === "" } >Login</button>

        </div></div>

    )
    };
export default Login;