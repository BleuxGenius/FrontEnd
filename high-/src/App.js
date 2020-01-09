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
<<<<<<< HEAD

        <PrivateRoute path="/home" component={Home} />
=======
      <PrivateRoute path="/home" component={Home} />
>>>>>>> e23c47754ccfb3e83be45fc32410d2d0f5c462a2
      </div>
    </Router>
  );
}

export default App;
