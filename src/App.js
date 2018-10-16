import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Home from "./home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
var config = {
  apiKey: "AIzaSyBhaTyVSKeU9zRpDdnn0OjPlOYHJnP5PKc",
  authDomain: "jslz85-exploration2.firebaseapp.com",
  databaseURL: "https://jslz85-exploration2.firebaseio.com",
  projectId: "jslz85-exploration2",
  storageBucket: "",
  messagingSenderId: "560710332526"
};
firebase.initializeApp(config);
class App extends Component {
  render() {
    return (
      <div className="container">
        <Home/>
      </div>
    );
  }
}

export default App;
