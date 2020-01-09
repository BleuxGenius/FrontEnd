import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import logo from "./images/Logo.png";
import {
  FacebookLoginButton,
  TwitterLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import { useState } from "react";

import { connect } from "react-redux";
import { login } from "../actions";

import axios from "axios";

const Login = props => {
  const [loginInfo, setLogininfo] = useState({ email: "", password: "" });
  const handleSubmit = event => {
    event.preventDefault();
    props.login(loginInfo);
    setLogininfo({ email: "", password: "" });
  };
  const handleChanges = event => {
    setLogininfo({ ...loginInfo, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  return (
    <MDBContainer className="container flex-row w-50 justify-content-center">
      <MDBRow>
        <MDBCol md="11">
          <MDBCard>
            <MDBCardBody>
              <Form className="login-form" onSubmit={handleSubmit}>
                <p>Med Cabinet </p>
                <MDBCol>
                  <img src={logo} className="imageThumbnail" alt="logo" />
                </MDBCol>
                <h2 className="text-center">Login</h2>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={loginInfo.email}
                    onChange={handleChanges}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginInfo.password}
                    onChange={handleChanges}
                  />
                </FormGroup>
                <button className="btn-sm btn-dark-block">Sign In</button>

                <div className="d-flex justify-content-between">
                  <div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="defaultLoginFormRemember"
                      />
                      <label
                        className="custom-control-label"
                        for="defaultLoginFormRemember"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div>
                    <a href="">Forgot password?</a>
                  </div>
                </div>

                <div className="text-center pt-3">Or</div>
                <FacebookLoginButton />
                <GoogleLoginButton />
                <TwitterLoginButton />
                <p>
                  Don't have an account?
                  <a href="#" className="signUpLink">
                    Sign Up
                  </a>
                </p>
              </Form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default connect(null, { login })(Login);
