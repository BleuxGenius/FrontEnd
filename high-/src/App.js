import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import SignUp from './components/SignUp';
import Login from './components/login.js';
import NavBar from './components/NavBar'
import StrainsCard from './components/StrainsCard';



function App() {
  return (
    <div className="App">
      <Route exact path='/'>
      <NavBar />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      
      <NavBar />
      <StrainsCard />
      
      
      


    </div>
  );
}

export default App;

