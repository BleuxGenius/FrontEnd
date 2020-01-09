import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
//import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={SignUp} />

        <PrivateRoute path="/home" component={Home} />
      
      </div>
    </Router>
  );
}

export default App;
