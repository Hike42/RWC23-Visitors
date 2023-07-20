import React from 'react';
import Header from '../../component/header/header';
import styled from 'styled-components';
import WelcomePageComponent from '../../component/welcomePageComponent/welcomePageComponent';
import France from '../../assets/Flags/france.png';
import NewZealand from '../../assets/Flags/new-zealand.png'

const Page = styled.div`
  min-height: 100vh;
  background: #10104C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Title = styled.div`
  margin: 24px 0px 64px;
`

const Heading1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 40px;
`;

const Heading2 = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;

const WelcomePage = () => {
  return (
    <Page>
      <Header/>
      <Title>
        <Heading1>Le plus prestigieux tournoi de rugby <br/> masculin au monde</Heading1>
        <Heading2>Vendredi 08 sept. 2023 - Samedi 28 Oct. 2023</Heading2>
      </Title>
      <WelcomePageComponent 
        firstLogoSource={France} 
        firstLogoText="FRANCE" 
        secondLogoSource={NewZealand}
        secondLogoText="NEW ZELEAND" 
        secondDivText="Stade de France, Saint-Denis" 
        thirdDivText="VENDREDI 8 Septembre 2023" 
    />
    </Page>
  );
};

export default WelcomePage;
