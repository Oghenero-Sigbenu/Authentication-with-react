import React from "react";

import "./Login.css";
function Login (props){

    return (
        <div className="login">
        <label name="user">Username</label>
<input type="text" name="user"></input>
<label name="user">Password</label>
<input type="password" name="pass" value="user" ></input>
<button disabled={props.value === ""}>Login</button>
        </div>

    )
    };
export default Login;