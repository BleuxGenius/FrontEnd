import React from 'react';
import logo from '../tile-logo.png';
import facebook from '../facebook-connect.svg';
import twitter from '../twitter-connect.svg';
import google from '../google-connect.svg';
import styled from 'styled-components';

const MainDiv = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 420px;
    height: 689px;
    margin: auto;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    margin-top: 15%;`;


const HeaderCont = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;`;

const Header = styled.h1`
    font-size: 25px;
    font-weight: bold;
    line-height: 29px
    margin-top: 31.25px;
    padding-right: 12.92px;`;

const LogoImg = styled.img`
    width: 32.27px;
    height: 36.47px;
    margin-top: 21.76px;`;

const Label = styled.label`
    font-size: 16px;
    line-height: 19px;
    margin-left: 16px;`;

const Input = styled.input`
    width: 378px;
    height: 44px;
    margin-top: 4px;
    margin-left: 16px;
    margin-bottom: 24px;
    border: 1px solid #ACACAC
    background-color: #F7F7F7
    padding-left: 10px;
    font-size: 12px;`;

const Paragraph = styled.p`
    font-size: 12px;
    width: 364px;
    height: 56px;
    text-align: center;
    margin: auto;
    margin-bottom: 14px`;

const SmallParagraph = styled.p`
    font-size: 12px;
    text-align: center;
    margin-bottom: 6px;
`;

const Span = styled.span`
    color: blue; `;

const SignUpBtn = styled.button`
    font-size: 16px;
    width: 260px;
    height: 44px;
    color: white;
    background-image: linear-gradient(#086571, #044A53);
    border-radius: 5px;
    margin-left: 80px;
     `;

const SocialBtn = styled.img`
    width: 388px;
    border-radius: 5px;
    margin-left: 16px;
`;

const GoogleBtn = styled.img`
    border-radius: 5px;
    width: 400px;
    margin-bottom: -9px;
    margin-left: 10px;
    
`;


export default function SignUp() {
    return (
        <MainDiv>
            <HeaderCont>
            <Header>Med Cabinet</Header>
            <LogoImg src={logo} alt="logo" />
            </HeaderCont>
        <form>
            <Label htmlFor='email'>Email</Label><br />
            <Input 
            id='email'
            type='text'
            name='email'
            placeholder='example@example.com'
            
            /><br />
            <Label htmlFor='username'>Username</Label><br />
            <Input
            id='username'
            type='text'
            name='username'
            placeholder='Create your username'
            
            /><br />
            <Label htmlFor='password'>Password</Label><br />
            <Input
            id='password'
            type='password'
            name='password'
            placeholder='8 or more characters'
            
            />
            <Paragraph>We respect privacy. Names and emails are not displayed publically. Nothing will be posted to your facebook, google or twitter account without your permission. By creating your Med Cabinet account, you agree to the <Span>terms of use</Span> and <Span>privacy policy</Span>.
            </Paragraph>
            <SignUpBtn type='submit'>Sign Up</SignUpBtn>
            <SmallParagraph>or</SmallParagraph>
            <SocialBtn src={facebook} className='facebook' alt='connect with facebook' />
            <GoogleBtn src={google} className='google' alt='connect with google' />
            <SocialBtn src={twitter} className='twitter' alt='connect with twitter' />
            
            
        </form>


        </MainDiv>
    )
}