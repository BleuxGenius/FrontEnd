import React from 'react';
import logo from '../tile-logo.png';
import facebook from '../facebook-connect.svg';
import twitter from '../twitter-connect.svg';
import google from '../google-connect.svg';
import styled from 'styled-components';


const Header = styled.div`
    display: flex;
    font-size: 1.5rem;
`;



export default function SignUp() {
    return (
        <div>
            <Header>
            <h1>Med Cabinet</h1>
            <img src={logo} className="App-logo" alt="logo" />
            </Header>
        <form>
            <label htmlFor='email'>Email</label><br />
            <input 
            id='email'
            type='text'
            name='email'
            placeholder='example@example.com'
            size='40'
            /><br />
            <label htmlFor='username'>Username</label><br />
            <input
            id='username'
            type='text'
            name='username'
            placeholder='Create your username'
            size='40'
            /><br />
            <label htmlFor='password'>Password</label><br />
            <input
            id='password'
            type='password'
            name='password'
            placeholder='8 or more characters'
            size='40'
            />
            <p>We respect privacy. Names and emails are not displayed publically. Nothing will be posted to your facebook, google or twitter account without your permission. By creating your Med Cabinet account, you agree to the terms of use and privacy policy.
            </p>
            <button type='submit'>Sign Up</button>
            <p>or</p>
            <div>
            <img src={facebook} className='facebook' alt='connect with facebook' />
            <img src={google} className='google' alt='connect with google' />
            <img src={twitter} className='twitter' alt='connect with twitter' />
            </div>
            
        </form>


        </div>
    )
}