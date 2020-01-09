import React from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import logo from './images/Logo.png';
import {FacebookLoginButton, TwitterLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios" 


 export default function Login(props) {
  
    const[signIn, setSignIn] = useState({
      email:"", password:""
    });
  
    const handleSubmit = e => {

      e.preventDefault();
      // props.logIn(signIn);
      axios
      .post("https://medicinalcabinet.herokuapp.com/api/user/login", signIn)

      axios
      .get("https://medicinalcabinet.herokuapp.com/api/user/login", signIn)
      }
  
      const handleChanges = e => {
        setSignIn({
          ...signIn, [e.target.name]: e.target.value
        });
      };
  
    return(

      // flex-row w-50 justify-content-center
     
  <div className="container" >
  <div className="row">
    <div className="column" md="11">
       <div className="card">
         <div className="cardBody">
  <Form className="login-form" onSubmit={handleSubmit}>
    <p>Med Cabinet </p>
    <div className="picColumn">
    <img src={logo} className="imageThumbnail" alt="logo"/> 
    </div>
    <h2 className="text-center">Login</h2>
    <FormGroup>
      <Label >Email</Label>
      <Input type="text" name="email" placeholder="Email" value={signIn.email} onChange={handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label>Password</Label>
      <Input type="password" name="password" placeholder="Password" value={signIn.password} onChange={handleChanges}/>
      </FormGroup>
      <button className="btn-sm btn-dark-block">Sign In</button>

  <div class="d-flex justify-content-between">
      <div>
          <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
              <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
         </div>
      </div>
      <div>
          <a href="">Forgot password?</a>
      </div>
  </div>

        <div className="text-center pt-3">
          Or
        </div>
        <FacebookLoginButton/>
        <GoogleLoginButton/>
        <TwitterLoginButton/>
          <p>
            Don't have an account?<Link to="/SignUp.js" class="signUpLink">Sign Up</Link>
          </p>
  </Form>
  </div>
  </div>
  </div>
</div>
  </div>
);
};
