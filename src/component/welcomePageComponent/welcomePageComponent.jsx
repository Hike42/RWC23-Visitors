import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';

const ComponentContainer = styled.div`
  display: flex;
  background: #FFF;
  border-radius: 6.4px;
`;

const FirstDiv = styled.div`
  padding: 18px 0px 0px 18px;

    h1 {
        font-size: 20px;
    }

    h1:first-of-type {
        margin-bottom: 100px;
    }

`;

const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  h2 {
    font-size: 12px;
    margin: -20px 0 20px;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const VSContainer = styled.div`
  display: flex;
  align-items: center; 
  padding: 20px 40px;
`;


const ThirdDiv = styled.div`

h2 {
    font-size: 20px;
    padding: 0 18px;
}

`;

const Divider = styled.hr`
  width: 95%;
  border: 0.8px solid #19194B;
`;

const CountdownContainer = styled.div`
  display: flex;
`;

const Vseparator = styled.h1`
margin: 0px 100px;
`

const CountdownItem = styled.div`
  font-size: 14px;
  margin: auto;

  h1 {
    font-size 20px;
    color: red;
    margin-bottom: -8px;
  }
`;

const WelcomePageComponent = ({ firstLogoSource, firstLogoText, secondLogoSource, secondLogoText, secondDivText, thirdDivText }) => {
  return (
    <ComponentContainer>
      <FirstDiv>
        <h1>RUGBY WORLD CUP 2023</h1>
        <h1 style={{color: 'red'}}>PROCHAIN MATCH</h1>
      </FirstDiv>

      <SecondDiv>
        <VSContainer>
          <div>
            <Logo src={firstLogoSource} alt='first logo'/>
            <p>{firstLogoText}</p>
          </div>
          <Vseparator>V</Vseparator>
          <div>
            <Logo src={secondLogoSource} alt='second logo'/>
            <p>{secondLogoText}</p>
          </div>
        </VSContainer>
        <h2>{secondDivText}</h2>
        <Button text="Faire une demande" backgroundColor="#19194B" color="#fff"></Button>
      </SecondDiv>
      
      <ThirdDiv>
        <h2>{thirdDivText}</h2>
        <Divider/>
        <CountdownContainer>
          <CountdownItem>
            <h1>55</h1>
            <p>jours</p>
          </CountdownItem>
          <CountdownItem>
            <h1>10</h1>
            <p>heures</p>
          </CountdownItem>
          <CountdownItem>
            <h1>12</h1>
            <p>mins</p>
          </CountdownItem>
        </CountdownContainer>
        <Divider/>
        <h2>21:15 Heure locale</h2>
      </ThirdDiv>
    </ComponentContainer>
  );
};

export default WelcomePageComponent;
