import React from "react";
 import { NavLink } from "react-router-dom";

import "./Navbar.css"
function Navbar () {
    return(
        <div className="nav">
             <div className="logo">
                 <h2>LOGO</h2>
             </div>
            <div className="menu">
          <NavLink to="/"><span>Home</span></NavLink>
          <NavLink to="/profile"><span>Profile</span></NavLink>
          <NavLink to="/setting"><span>Setting</span></NavLink>           
          <NavLink to="/login"><span>Login</span></NavLink>

          </div>
         
        </div>
    )
};


export default Navbar;