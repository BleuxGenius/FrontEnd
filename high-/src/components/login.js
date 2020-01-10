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


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
      axios
      .post("https://medicinalcabinet.herokuapp.com/api/user/login", signIn)
       console.log('User data', data);
    
     axios
       .get("https://medicinalcabinet.herokuapp.com/api/user/login", signIn)
    

    }; // your form submit function which will invoke after successful validation

    const handleChanges = e => {
      setSignIn({ ...signIn, [e.target.name]: e.target.value})
       };
  
  
    console.log(watch("password")); // you can watch individual input by pass the name of the input
  
  
    return(
      
      <div className="container" >
   <div className="row">
     <div className="column" md="11">
        <div className="card">
          <div className="cardBody"></div>

      <form className= "login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="picColumn">
        <p className="medCabinet">Med Cabinet</p> 
        <img className="logo" src={logo} alt="logo"/> 
        </div>
      <FormGroup>
      <label>Email</label>
      <input name="email" placeholder="Email" ref={register}/>
      </FormGroup>
      <br></br>

      <FormGroup>

      <label>Password</label>
      <input
        name="password" placeholder="password" onChange={handleChanges}
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.password && <p>This field is required*</p>}
      <br></br>

        <button type="submit">Login</button>

        <div class="custom-control custom-checkbox">
           <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
          <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
         </div>
         <div>
           <a href="">Forgot password?</a>
       </div>
       <div className="text-center pt-3">
         Or
         </div>
      </FormGroup>
      
       <FacebookLoginButton/>
      <GoogleLoginButton/>
       <TwitterLoginButton/>
         <p>
           Don't have an account?<Link to="/signup" class="signUpLink">Sign Up</Link>
          </p>
    </form>
    </div>
      </div>
      </div>
</div>
  );
}
     
