import React from "react";
import "./App.css";
import Login from './components/login.js';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import logo from './components/images/Logo.png';
import {FacebookLoginButton, TwitterLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';


const saveLogin = [
  'keepMeLoggedIn',
  'dontKeepMeLoggedIn'
];

function App() {
  return (

  <MDBContainer className="container d-flex flex-column w-50 justify-content-center" >
    <MDBRow className="h-30px">
      <MDBCol md="11">
         <MDBCard>
           <MDBCardBody>
    <Form className="login-form">
      <p>Med Cabinet </p>
      <img src={logo} className="Logo" alt="logo"/> 
      <h2 className="text-center">Login</h2>
      <FormGroup>
        <Label >Email</Label>
        <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password"/>
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
              Don't have an account?<a href="/" class="signUpLink">Sign Up</a>
            </p>
    </Form>
    </MDBCardBody>
    </MDBCard>
    </MDBCol>
  </MDBRow>
    </MDBContainer>

    
  );
}

export default App;
