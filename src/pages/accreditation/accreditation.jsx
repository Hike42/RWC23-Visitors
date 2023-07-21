import React from 'react';
import Header from '../../component/header/header';
import styled from 'styled-components';
import FranceLogo from '../../assets/Flags/france.png';
import NewZealandLogo from '../../assets/Flags/new-zealand.png';
import ItalyLogo from '../../assets/Flags/italy.png';
import NamibiaLogo from '../../assets/Flags/namibia.png';

const Page = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  background: #2A37E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const UnderHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #2A37E6;
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  padding-left: 150px; 
  color: #ffffff;
  font-size: 20px;
  text-transform: uppercase;
`;

const MainContainer = styled.div`
  width: 80%;
  background: #ffffff;
  border-radius: 6.4px;
  margin: 120px auto 50px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start; 
  padding: 32px; 
`;

const HeaderTitle = styled.h1`
  margin: 0 0 24px 0;
  font-size: 24px;
`;

const Row = styled.div`
  display: flex;
  min-height: 100px; // Augmenté pour accommoder le contenu de la ligne
  width: 100%;
  justify-content: space-between;
  background: ${props => props.background || "#fff"};
  align-items: center;
  border-radius: 6.4px;
  margin-bottom: 32px;
`;

const Column = styled.div`
  width: ${props => props.width || "33%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogosAndMatchInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  margin-right: 32px;
  margin-left: 50px;

  img {
    width: 50px;
    height: 50px;
  }

  img:last-child {
    margin-left: 10px;
  }
`;

const MatchInfo = styled.div`
  margin-left: 16px;
  flex-grow: 1;
`;

const MatchDate = styled.p`
  font-size: 14px;
`;

const StatusBox = styled.div`
  border-radius: 6.4px;
  background: ${props => props.background || "#19194B"};
  padding: 10px;
  color: #ffffff;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AccreditationBox = styled.div`
  background: ${props => props.background || "#19194B"};
  border-radius: 6.4px;
  padding: 10px;
  color: #ffffff;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Accreditation = () => {
  return (
    <Page>
      <Header/>
      <UnderHeader>
        Vos accréditations
      </UnderHeader>
      <MainContainer>
        <HeaderTitle>Vos accréditation</HeaderTitle>
        <Row>
          <Column width="60%">Match</Column>
          <Column width="20%">Accréditation</Column>
          <Column width="20%">Statut</Column>
        </Row>
        <Row background="#EBEBEB">
          <Column width="60%">
            <LogosAndMatchInfo>
              <Logos>
                <img src={FranceLogo} alt="Logo 1" />
                <img src={NewZealandLogo} alt="Logo 2" />
              </Logos>
              <MatchInfo>
                <HeaderTitle>FRANCE V NEW ZEALAND</HeaderTitle>
                <MatchDate>08.09.2023 - 21:15 • STADE DE FRANCE</MatchDate>
              </MatchInfo>
            </LogosAndMatchInfo>
          </Column>
          <Column width="20%">
            <AccreditationBox background="#52b788">
              Demander
            </AccreditationBox>
          </Column>
          <Column width="20%">
            <StatusBox background="#f4a261">
              En attente
            </StatusBox>
          </Column>
        </Row>

        <Row background="#EBEBEB">
          <Column width="60%">
            <LogosAndMatchInfo>
              <Logos>
                <img src={ItalyLogo} alt="Logo 1" />
                <img src={NamibiaLogo} alt="Logo 2" />
              </Logos>
              <MatchInfo>
                <HeaderTitle>ITALY V NAMIBIA</HeaderTitle>
                <MatchDate>09.09.2023 - 21:15 • STADE GEOFFROY-GUICHARD</MatchDate>
              </MatchInfo>
            </LogosAndMatchInfo>
          </Column>
          <Column width="20%">
            <AccreditationBox background="#c1121f">
              Erreur
            </AccreditationBox>
          </Column>
          <Column width="20%">
            <StatusBox background="#c1121f">
              Refuser
            </StatusBox>
          </Column>
        </Row>
      </MainContainer>
    </Page>
  )
}

export default Accreditation;
