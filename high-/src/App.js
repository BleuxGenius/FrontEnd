import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
//import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
