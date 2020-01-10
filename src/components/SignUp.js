
import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from "axios"
import logo from '../tile-logo.png';
import facebook from '../facebook-connect.svg';
import twitter from '../twitter-connect.svg';
import google from '../google-connect.svg';
import styled from 'styled-components';
import {signUp} from "../actions/index"
import {connect} from "react-redux"

const MainDiv = styled.div`
  font-family: "Roboto", sans-serif;
  width: 420px;
  height: 689px;
  margin: auto;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  margin-top: 15%;
`;

const HeaderCont = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 25px;
  font-weight: bold;
  line-height: 29px;
  margin-top: 31.25px;
  padding-right: 12.92px;
`;

const LogoImg = styled.img`
  width: 32.27px;
  height: 36.47px;
  margin-top: 21.76px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  margin-left: 16px;
`;

const Input = styled.input`
  width: 378px;
  height: 44px;
  margin-top: 4px;
  margin-left: 16px;
  margin-bottom: 24px;
  border: 1px solid #acacac;
  background-color: #f7f7f7;
  padding-left: 10px;
  font-size: 12px;
`;

const Paragraph = styled.p`
  font-size: 12px;
  width: 364px;
  height: 56px;
  text-align: center;
  margin: auto;
  margin-bottom: 14px;
`;

const SmallParagraph = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 6px;
`;

const SignInParagraph = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 24px;
`;

const Span = styled.span`
  color: blue;
`;

const SignInLink = styled.a`
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const SignUpBtn = styled.button`
  font-size: 16px;
  width: 260px;
  height: 44px;
  color: white;
  background-image: linear-gradient(#086571, #044a53);
  border-radius: 5px;
  margin-left: 80px;
  margin-bottom: 10px;
  cursor: grab;
`;

const SocialBtn = styled.img`
  width: 388px;
  border-radius: 5px;

  margin: auto;
  margin-left: 16px;
  cursor: pointer;
`;

const GoogleBtn = styled.img`
  border-radius: 5px;
  width: 395px;
  margin-bottom: -9px;
  margin-left: 10px;
  cursor: pointer;
`;

const SignUp = props => {
  const [signup, setsignup] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.signUp(signup);
    props.history.push("/login");
    setsignup({ username: "", password: "", email: "" });
  };

  const handleChange = event => {
    setsignup({ ...signup, [event.target.name]: event.target.value });
  };

  return (
    <MainDiv>
      <HeaderCont>
        <Header>Med Cabinet</Header>
        <LogoImg src={logo} alt="logo" />
      </HeaderCont>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <br />
        <Input
          id="email"
          type="text"
          name="email"
          placeholder="example@example.com"
          value={signUp.email}
          onChange={handleChange}
        />
        <br />
        <Label htmlFor="username">Username</Label>
        <br />
        <Input
          id="username"
          type="text"
          name="username"
          placeholder="Create your username"
          value={signUp.username}
          onChange={handleChange}
        />
        <br />
        <Label htmlFor="password">Password</Label>
        <br />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="8 or more characters"
          value={signUp.password}
          onChange={handleChange}
        />
        <Paragraph>
          We respect privacy. Names and emails are not displayed publically.
          Nothing will be posted to your facebook, google or twitter account
          without your permission. By creating your Med Cabinet account, you
          agree to the <Span>terms of use</Span> and <Span>privacy policy</Span>
          .
        </Paragraph>
        <SignUpBtn type="submit">Sign Up</SignUpBtn>

        <Paragraph>or</Paragraph>
        <SocialBtn
          src={facebook}
          className="facebook"
          alt="connect with facebook"
        />
        <SocialBtn src={google} className="google" alt="connect with google" />
        <SocialBtn
          src={twitter}
          className="twitter"
          alt="connect with twitter"
        />

        <SmallParagraph>or</SmallParagraph>
        <SocialBtn
          src={facebook}
          className="facebook"
          alt="connect with facebook"
          onClick={() => alert("Hello")}
        />
        <GoogleBtn src={google} className="google" alt="connect with google" />
        <SocialBtn
          src={twitter}
          className="twitter"
          alt="connect with twitter"
        />
        <SignInParagraph>
          Already have an account? <SignInLink href="#">Sign In</SignInLink>
        </SignInParagraph>
      </form>
    </MainDiv>
  );
};

export default connect(null, { signUp })(SignUp);
