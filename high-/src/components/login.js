import React from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import logo from './images/Logo.png';
import {FacebookLoginButton, TwitterLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import { useState } from "react";
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from "axios" 


 export default function Login() {
  
    const[signIn, setSignIn] = useState({
      email:"", password:""
    });
  
    const { register, handleSubmit, watch, errors}  = useForm();
  
      const onSubmit = data => {
      // props.logIn(signIn);
      axios
      .post("https://medicinalcabinet.herokuapp.com/api/user/login", signIn)

      axios
      .get("https://medicinalcabinet.herokuapp.com/api/user/login", signIn)
      };

      const handleChanges = e => {
       setSignIn({ ...signIn, [e.target.name]: e.target.value})
      };
  
    return(
     
  <div className="container" >
  <div className="row">
    <div className="column" md="11">
       <div className="card">
         <div className="cardBody">
  <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="picColumn">
    <p className="medCabinet">Med Cabinet</p> 
    <img className="logo" src={logo} alt="logo"/> 
    </div>
    <h2 className="text-center">Login</h2>
    <FormGroup>
      <Label >Email</Label>
      <Input type="text" name="email" placeholder="Email" value={signIn.email} onChange={handleChanges}/>
      </FormGroup>
      <FormGroup>
      <Label >Password</Label>

      <Input type="password" name="password" placeholder="Password" value={signIn.password} onChange={handleChanges} ref={register({ required: true})}/>

      {errors.password && <p className="errorsMessage">This field is required*</p>}

      </FormGroup>
      <button type='submit'> Login </button>

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
            Don't have an account?<Link to="/signup" class="signUpLink">Sign Up</Link>
          </p>
  </Form>
  </div>
  </div>
  </div>
</div>
  </div>
);
};
