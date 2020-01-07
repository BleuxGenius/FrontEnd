import React from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import logo from './images/Logo.png';
import {FacebookLoginButton, TwitterLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { useState } from "react";


import axios from "axios"

function Login() {
  return <div>Login page</div>;
}

 export default function Login(props) {
  
    const[signIn, setSignIn] = useState({
      email:"", password:""
    });
  
    const Login = e => {

      e.preventDefault();
      props.logIn(signIn)
      
      }
  
      const handleChanges = e => {
        setSignIn({
          ...signIn, [e.target.name]: e.target.value
        });
      };
  
    return(
     
  <MDBContainer className="container flex-row w-50 justify-content-center" >
  <MDBRow>
    <MDBCol md="11">
       <MDBCard>
         <MDBCardBody>
  <Form className="login-form" onSubmit={Login}>
    <p>Med Cabinet </p>
    <MDBCol>
    <img src={logo} className="imageThumbnail" alt="logo"/> 
    </MDBCol>
    <h2 className="text-center">Login</h2>
    <FormGroup>
      <Label >Email</Label>
      <Input type="email" name="email" placeholder="Email" value={signIn.email} onChange={handleChanges}/>
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
            Don't have an account?<a href="/" class="signUpLink">Sign Up</a>
          </p>
  </Form>
  </MDBCardBody>
  </MDBCard>
  </MDBCol>
</MDBRow>
  </MDBContainer>

  
);
};
