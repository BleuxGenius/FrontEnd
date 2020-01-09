import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import strainbox from '../Strainbox.png'

const TopDiv = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const StrainDiv = styled.div`
    width: 350px;
    height: 400px;
    background-color: #FAFAFA;
    border: 1px solid #CECECE;
    border-radius: 6px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Header = styled.h2`
    font-size: 28px;
    color: #044953;
    text-align: left;
`;

const ViewLink = styled(Link)`
    font-size: 16px;
    color: #044953;
`;

const StrainType = styled.p`
    color: #78070D;
    margin-left: -40px;
    margin-top: -150px;
`;

const StrainAbb = styled.p`
    font-size: 62px;
    font-weight: 500;
    color: #FFFFFF;
    margin: 15px;
`;

const Strain = styled.p`
    font-size: 35px;
    color: #044953;
    padding-top: 75px;
    margin: auto;
`;

const TileImg = styled.img`
    width: 152px;
    height: 167px;
    margin-top: 77.77px;
`;

export default function StrainsCard() {

    return (
        <div>
            <TopDiv>
            <Header>Popular Strains</Header>
            <ViewLink linkto='/viewmore'>View More</ViewLink>
            </TopDiv>
            <StrainDiv>
                <TileImg src={strainbox} alt='strain type'></TileImg>
                <StrainType>Sativa</StrainType>
                <StrainAbb>SLV</StrainAbb>
                <Strain>Silver Haze</Strain>
            </StrainDiv>
        </div>


    )
}