import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./Component/Main/Navbar/Navbar";
import Home from "./Component/Main/Home/Home";
import Login from "./Component/Main/Login/Login";
import Profile from "./Component/Main/Profile/Profile";
import Setting from "./Component/Main/Setting/Setting";
// import TweetInput from "./Component/Main/TweetInput/TweetInput"



import './App.css';

class App extends Component {

  state = {
    value: "",
    isAuth: false,
    username: "",
    password: "",
    error: "",
    // tweet: 0,
    // count: 5
  }
  nameC = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  passW = (e) => {
    this.setState({
    password: e.target.value
    })
  }

  login = (e) => {
    if(this.state.username === "admin" && this.state.password ==="pass"){
    this.setState({
      isAuth: true
    })
    console.log("love")
  }

   else{ let err = <span>Login details incorrect</span>
   
     this.setState({
       error: err
     })
   }}
  submit = () => {
  }

handleChange = (e) => {
this.setState({
tweet: e.target.value.length
})
}


render() {
  return (
    <div className="App">
      <Navbar />
      {/* <div>
      <textarea onChange={this.handleChange} maxLength="5"></textarea>
      </div>
      <div>
      <button disabled={this.state.tweet >= 5}>Submit</button>
      <h3>{`${this.state.tweet}/${this.state.count}`}</h3>
        {/* <h2>{this.count}</h2> */}
      {/* </div> */} 

      < Switch >
       <Route path = "/profile" render ={ ()=> <Profile isAuth />} /> 
      < Route path="/setting" exact render={ () => <Setting isAuth/>} />
      <Route path="/login/" exact={true}
       render = { () => <Login passW={this.passW}
                           pass={this.state.password}
                         isAuth={this.state.isAuth}/>}
                         value={this.state.value}
                         user={this.state.username}
                          error={this.state.error} 
                          login={this.login} 
                          nameC={this.nameC}  />
      <Route path="/" exact={true} Component={Home} />
      </Switch >
      </div >
  );
}
}

export default App;
