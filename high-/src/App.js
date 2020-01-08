import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar'



function App() {
  return (
    <div className="App">
      <Route exact path='/'>
      <NavBar />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      
      


    </div>
  );
}

export default App;

