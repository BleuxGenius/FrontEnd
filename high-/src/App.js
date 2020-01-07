import React from "react";
import "./App.css";
import Login from './components/login.js';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import logo from './components/images/Logo.png';
import {FacebookLoginButton, TwitterLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


const saveLogin = [
  'keepMeLoggedIn',
  'dontKeepMeLoggedIn'
];

function App() {
  return (

    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );


    // <Form className="login-form">
    //   <h2>MedCabinet</h2>
    //   <img src={logo} className="Logo" alt="logo"/>
    //   <h2 className="text-center">Login</h2>
    //   <FormGroup>
    //     <Label >Email</Label>
    //     <Input type="email" placeholder="Email"/>
    //     </FormGroup>
    //     <FormGroup>
    //     <Label>Password</Label>
    //     <Input type="password" placeholder="Password"/>
    //     </FormGroup>
    //     <button className="btn-sm btn-dark-block">Sign In</button>
    //       <div className="text-center pt-3">
    //         Or
    //       </div>
    //       <FacebookLoginButton/>
    //       <GoogleLoginButton/>
    //       <TwitterLoginButton/>
    //         <p>
    //           Don't have an account?<a href="/" class="signUpLink">Sign Up</a>
    //         </p>
           
            

    // </Form>

    
  // );
}

export default App;
