import React from 'react';
import styled from 'styled-components';
import logo from '../tile-logo.png';
import location from '../location.png'
import banner from '../banner.png'

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: Roboto;
    margin: 2% auto;
    width: 95%;
    flex-wrap: wrap;

`;

const InnerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 25px;
    padding-right: 13px;
    color: #044953;


`;

const LogoImg = styled.img`
    width: 32.27px;
    height: 36.47px;
    margin-right: 23px;
`;

const PinImg = styled.img`
    margin-right: 3px;
`;

const CitySpan = styled.span`
    font-size: 14px;
    color: #044953;
    margin-right: 32px;
`;

const Input = styled.input`
    font-size: 14px;
    width: 357px;
    height: 32px;
    background-color: #F7F7F7;
    color: #918383;
    margin-right: 42px;
    padding-left: 46px;
    border-radius: 3px;
    border: 1px solid #ACACAC;
`;

const NaviLink = styled.a`
    font-size: 16px;
    color: #044953;
    margin-right: 12px;
    text-decoration: none;
`;

const SignInLink = styled.a`
    margin-left: 31px;
    color: #044953;
    font-size: 16px;
    margin-right: 11px;
    text-decoration: none;
`;

const SignUpBtn = styled.button`
    font-size: 16px;
    width: 100px;
    height: 40px;
    color: white;
    background-image: linear-gradient(#086571, #044A53);
    border-radius: 5px;
    cursor: grab; 
`;

const HeaderImg = styled.img`
    width: 1440px;
    height: 280px;
    margin: 1% auto;
`;

const TextDiv = styled.div`
    position: absolute;
    top: 148px;
    left: 170px;
    color: white;
    width: 333px;
    height: 84px;
    font-size: 36px;
`;

const LearnButton = styled.button`
    color: white
    font-size: 19px;
    background-color: #044953;
    width: 145px
    height: 38px;
    position: absolute;
    top: 245px;
    left: 170px;

`;

export default function NavBar() {
    return (
        <MainDiv>
            <InnerDiv>
                <Header>Med Cabinet</Header>
                <LogoImg src={logo} alt="logo" />
            </InnerDiv>
            <InnerDiv>
                <PinImg src={location} alt='location pin' />
                <CitySpan>Jersey City, NJ</CitySpan>
            </InnerDiv>
            <InnerDiv>
                <Input 
                id='strain'
                name='strain'
                type='text'
                placeholder= 'Search for strains, dispensaries, and news'
                />
                <NaviLink href='#'>Strains</NaviLink>
                <NaviLink href='#'>Dispensaries</NaviLink>
                <SignInLink href='#'>Sign In</SignInLink>
                <SignUpBtn>Sign Up</SignUpBtn>
            </InnerDiv>
                <HeaderImg src={banner} alt='banner image' />
                <TextDiv>The Cannabis Guide Just For You</TextDiv>
                <LearnButton>Learn Now</LearnButton>
            
        </MainDiv>
       
    )
}