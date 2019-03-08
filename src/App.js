import React, { Component } from 'react';
 import {Route, Switch } from "react-router-dom"
import Navbar from "./Component/Main/Navbar/Navbar";
import Home from "./Component/Main/Navbar/Home/Home";
import Login from "./Component/Main/Navbar/Login/Login";
// import Profile from "./Component/Main/Navbar/Profile/Profile";
import Setting from "./Component/Main/Navbar/Setting/Setting";




import './App.css';

class App extends Component {

  state = {
    value: ""
  }
  render() {
    return (
      <div className="App">
       <Navbar />
       <Login value={this.state.value} />

 <Switch>
  
  <Route path = "/profile" render ={ ()=> <h2>About Us</h2>} />
  <Route path = "/settings" exact Component={Setting} />
  <Route path = "/login/" exact={true} Component={Login} />
  <Route path = "/"  exact={true} Component={Home} />
</Switch> 
      </div>
    );
  }
}

export default App;
