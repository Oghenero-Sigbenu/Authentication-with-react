import React from "react";
 import { Link } from "react-router-dom";

import "./Navbar.css"
function Navbar () {
    return(
        <div className="nav">
             <div className="logo">
                 <h2>LOGO</h2>
             </div>
            <div className="menu">
          <Link to="/"><span>Home</span></Link>
          <Link to="/profile"><span>Profile</span></Link>
          <Link to="/settings"><span>Setting</span></Link>           
          <Link to="/login"><span>Login</span></Link>

          </div>
         
        </div>
    )
};


export default Navbar;