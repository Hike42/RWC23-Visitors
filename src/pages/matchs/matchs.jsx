import React from 'react';
import Header from '../../component/header/header';
import styled from 'styled-components';
import MatchComponent from '../../component/match/match';
import FranceLogo from '../../assets/Flags/france.png';
import NewZealandLogo from '../../assets/Flags/new-zealand.png';
import ItalyLogo from '../../assets/Flags/italy.png';
import UruguayLogo from '../../assets/Flags/uruguay.png';
import NamibiaLogo from '../../assets/Flags/namibia.png';
import SouthAfricaLogo from '../../assets/Flags/south-africa.png';
import IrelandLogo from '../../assets/Flags/ireland.png';
import ScotlandLogo from '../../assets/Flags/scotland.png';
import TongaLogo from '../../assets/Flags/tonga.png';
import RomaniaLogo from '../../assets/Flags/romania.png';
import WalesLogo from '../../assets/Flags/wales.png';
import AustraliaLogo from '../../assets/Flags/australia.png';
import FijiLogo from '../../assets/Flags/fiji.png';
import GeorgiaLogo from '../../assets/Flags/georgia.png';
import PortugalLogo from '../../assets/Flags/portugal.png';
import EnglandLogo from '../../assets/Flags/england.png';
import JapanLogo from '../../assets/Flags/japan.png';
import ArgentinaLogo from '../../assets/Flags/argentina.png';
import SamoaLogo from '../../assets/Flags/samoa.png';
import ChileLogo from '../../assets/Flags/chile.png';


const Page = styled.div`
  min-height: 100vh;
  background: #2A37E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 80px;
`;

const UnderHeader = styled.div`
    position: absolute;
    top: 84px;
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
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 180px;
`;

const FiltersContainer = styled.div`
  width: 20%;
  margin-left: 80px;
  color: #fff;

  h2 {
    margin: 0 0 30px;
  }
`;

const FilterTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 6.4px;

  ::first-letter {
    text-transform: capitalize;
  }
`;

const ContentContainer = styled.div`
  margin-left: 100px;

  Title::second-child 

`;

const Title = styled.h1`
  text-align: left;
  color: #ffffff;
  font-size: 20px;

  &:not(:first-child) {
    margin-top: 24px;
  }
`;

const Matchs = () => {
    return (
        <Page>
            <Header/>
            <UnderHeader>
                Tous les matchs
            </UnderHeader>
            <MainContainer>
                <FiltersContainer>
                    <FilterTitle>Filtrer les matchs</FilterTitle>
                    <FilterTitle>Selectionner Equipes</FilterTitle>
                    <FilterSelect>
                        <option>Toutes les équipes</option>
                        <option>France</option>
                        <option>New Zealand</option>
                        <option>Italy</option>
                        <option>Uruguay</option>
                        <option>Namibia</option>
                        <option>South Africa</option>
                        <option>Ireland</option>
                        <option>Scotland</option>
                        <option>Tonga</option>
                        <option>Romania</option>
                        <option>Wales</option>
                        <option>Australia</option>
                        <option>Fiji</option>
                        <option>Georgia</option>
                        <option>Portugal</option>
                        <option>England</option>
                        <option>Japan</option>
                        <option>Argentina</option>
                        <option>Samoa</option>
                        <option>Chile</option>
                    </FilterSelect>
                    <hr/>
                    <FilterTitle>Selectionner Stades</FilterTitle>
                    <FilterSelect>
                        <option>Tous les stades</option>
                        <option>Stade de France, Saint-Denis</option>
                        <option>Stade Geoffroy-Guichard, Saint-Étienne</option>
                        <option>Stade de Bordeaux, Bordeaux</option>
                        <option>Stade de Marseille, Marseille</option>
                        <option>Stadium de Toulouse, Toulouse</option>
                        <option>Stade Pierre-Mauroy, Lille</option>
                        <option>Stade de Nice, Nice</option>
                        <option>Stade de la Beaujoire, Nantes</option>
                    </FilterSelect>
                </FiltersContainer>
                <ContentContainer>
                    <Title>VENDREDI, 8 Septembre</Title>
                    <MatchComponent 
                        day="Vendredi" 
                        date="8 septembre" 
                        time="heure locale 21:15" 
                        team1Logo={FranceLogo} 
                        team2Logo={NewZealandLogo} 
                        team1Name="FRANCE" 
                        team2Name="NEW ZEALAND" 
                        pool="Pool A" 
                        stadium="Stade de France" 
                        city="Saint-Denis" 
                        />  
                    <Title>SAMEDI, 9 Septembre</Title>
                    <MatchComponent 
                        day="Samedi" 
                        date="9 septembre" 
                        time="heure locale 21:15" 
                        team1Logo={ItalyLogo} 
                        team2Logo={NamibiaLogo} 
                        team1Name="ITALY" 
                        team2Name="NAMIBIA" 
                        pool="Pool A" 
                        stadium=" Stade Geoffroy-Guichard" 
                        city="Saint-Étienne" 
                        />
                    <MatchComponent 
                        day="Samedi" 
                        date="9 septembre" 
                        time="heure locale 15:30" 
                        team1Logo={IrelandLogo} 
                        team2Logo={RomaniaLogo} 
                        team1Name="IRELAND" 
                        team2Name="ROMANIA" 
                        pool="Pool B" 
                        stadium="Stade de Bordeaux" 
                        city="Bordeaux" 
                        />
                    <MatchComponent 
                        day="Samedi" 
                        date="9 septembre" 
                        time="heure locale 18:00" 
                        team1Logo={AustraliaLogo} 
                        team2Logo={GeorgiaLogo} 
                        team1Name="IRELAND" 
                        team2Name="ROMANIA" 
                        pool="Pool C" 
                        stadium="Stade de France" 
                        city="Saint-Denis" 
                        />
                    <MatchComponent 
                        day="Samedi" 
                        date="9 septembre" 
                        time="heure locale 21:30" 
                        team1Logo={EnglandLogo} 
                        team2Logo={ArgentinaLogo} 
                        team1Name="ENGLAND" 
                        team2Name="ARGENTINE" 
                        pool="Pool D" 
                        stadium="Stade de Marseille" 
                        city="Marseille" 
                        />
                    <Title>DIMANCHE, 10 Septembre</Title>
                    <MatchComponent 
                        day="Dimanche" 
                        date="10 septembre" 
                        time="heure locale 13:00" 
                        team1Logo={JapanLogo} 
                        team2Logo={ChileLogo} 
                        team1Name="JAPAN" 
                        team2Name="CHILE" 
                        pool="Pool D" 
                        stadium="Stadium de Toulouse" 
                        city="Toulouse" 
                        />
                    <MatchComponent 
                        day="Dimanche" 
                        date="10 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={SouthAfricaLogo} 
                        team2Logo={ScotlandLogo} 
                        team1Name="SOUTH AFRICA" 
                        team2Name="SCOTLAND" 
                        pool="Pool B" 
                        stadium="Stade de Marseille" 
                        city="Marseille" 
                        />
                    <MatchComponent 
                        day="Dimanche" 
                        date="10 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={WalesLogo} 
                        team2Logo={FijiLogo} 
                        team1Name="ENGLAND" 
                        team2Name="ARGENTINE" 
                        pool="Pool C" 
                        stadium="Stade de Bordeaux" 
                        city="Bordeaux" 
                        />
                    <Title>Jeudi, 14 Septembre</Title>
                    <MatchComponent 
                        day="Jeudi" 
                        date="14 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={FranceLogo} 
                        team2Logo={UruguayLogo} 
                        team1Name="FRANCE" 
                        team2Name="URUGUAY" 
                        pool="Pool A" 
                        stadium="Stade Pierre-Mauroy" 
                        city="Lille" 
                        />
                    <Title>VENDREDI, 15 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="Vendredi" 
                        date="15 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={NewZealandLogo} 
                        team2Logo={NamibiaLogo} 
                        team1Name="NEW ZEALAND" 
                        team2Name="NAMIBIA" 
                        pool="Pool A" 
                        stadium="Stadium de Toulouse" 
                        city="Toulouse" 
                        />
                    <Title>SAMEDI, 16 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="SAMEDI" 
                        date="16 septembre" 
                        time="heure locale 15:00" 
                        team1Logo={SamoaLogo} 
                        team2Logo={ChileLogo} 
                        team1Name="SAMOA" 
                        team2Name="CHILE" 
                        pool="Pool D" 
                        stadium="Stade de Bordeaux" 
                        city="Bordeaux" 
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="16 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={WalesLogo} 
                        team2Logo={PortugalLogo} 
                        team1Name="WALES" 
                        team2Name="PORTUGAL" 
                        pool="Pool C" 
                        stadium="Stade de Nice" 
                        city="Nice" 
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="16 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={IrelandLogo} 
                        team2Logo={TongaLogo} 
                        team1Name="IRELAND" 
                        team2Name="TONGA" 
                        pool="Pool B" 
                        stadium="Stade de la Beaujoire" 
                        city="Nantes" 
                        />
                    <Title>DIMANCHE, 17 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="17 septembre" 
                        time="heure locale 15:00" 
                        team1Logo={SouthAfricaLogo} 
                        team2Logo={RomaniaLogo} 
                        team1Name="SOUTH AFRICA" 
                        team2Name="ROMANIA" 
                        pool="Pool B" 
                        stadium="Stade de Bordeaux" 
                        city="Bordeaux" 
                        />
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="17 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={AustraliaLogo} 
                        team2Logo={FijiLogo} 
                        team1Name="AUSTRALIA" 
                        team2Name="FIJI" 
                        pool="Pool C" 
                        stadium="Stade Geoffroy-Guichard" 
                        city="Saint-Étienne" 
                        />
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="17 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={EnglandLogo} 
                        team2Logo={JapanLogo} 
                        team1Name="ENGLAND" 
                        team2Name="JAPAN" 
                        pool="Pool D" 
                        stadium="Stade de Nice" 
                        city="Nice" 
                        />
                    <Title>Mercredi, 20 Septembre</Title>
                    <MatchComponent 
                        day="MERCREDI" 
                        date="20 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={ItalyLogo} 
                        team2Logo={UruguayLogo} 
                        team1Name="ITALY" 
                        team2Name="URUGUAY" 
                        pool="Pool A" 
                        stadium="Stade de Nice" 
                        city="Nice" 
                        />
                    <Title>JEUDI, 21 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="JEUDI" 
                        date="21 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={FranceLogo} 
                        team2Logo={NamibiaLogo} 
                        team1Name="FRANCE" 
                        team2Name="NAMIBIA" 
                        pool="Pool A" 
                        stadium="Stade de Marseille" 
                        city="Marseille" 
                        />
                    <Title>Vendredi, 22 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="VENDREDI" 
                        date="22 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={ArgentinaLogo} 
                        team2Logo={SamoaLogo} 
                        team1Name="ARGENTINA" 
                        team2Name="SAMOA" 
                        pool="Pool D" 
                        stadium="Stade Geoffroy-Guichard" 
                        city="Saint-Étienne" 
                        />
                    <Title>Samedi, 23 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="SAMEDI" 
                        date="23 septembre" 
                        time="heure locale 14:00" 
                        team1Logo={GeorgiaLogo} 
                        team2Logo={PortugalLogo} 
                        team1Name="GEORGIA" 
                        team2Name="PORTUGAL" 
                        pool="Pool C" 
                        stadium="Stadium de Toulouse" 
                        city="Toulouse" 
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="23 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={EnglandLogo} 
                        team2Logo={ChileLogo} 
                        team1Name="ENGLAND" 
                        team2Name="CHILE" 
                        pool="Pool D" 
                        stadium="Stade Pierre-Mauroy" 
                        city="Lille" 
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="23 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={SouthAfricaLogo} 
                        team2Logo={IrelandLogo} 
                        team1Name="SOUTH AFRICA" 
                        team2Name="IRELAND" 
                        pool="Pool B" 
                        stadium="Stade de France" 
                        city="Saint-Denis" 
                        />
                    <Title>Dimanche, 24 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="24 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={ScotlandLogo} 
                        team2Logo={TongaLogo} 
                        team1Name="SCOTLAND" 
                        team2Name="TONGA" 
                        pool="Pool B" 
                        stadium="Stade de Nice" 
                        city="Nice" 
                        />
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="24 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={WalesLogo} 
                        team2Logo={AustraliaLogo} 
                        team1Name="WALES" 
                        team2Name="AUSTRALIA" 
                        pool="Pool C" 
                        stadium="OL Stadium" 
                        city="Lyon" 
                        />
                    <Title>Mercredi, 27 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="MERCREDI" 
                        date="27 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={UruguayLogo} 
                        team2Logo={NamibiaLogo} 
                        team1Name="URUGUAY" 
                        team2Name="NAMIBIA" 
                        pool="Pool A" 
                        stadium="OL Stadium" 
                        city="Lyon" 
                        />
                    <Title>Jeudi, 28 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="JEUDI" 
                        date="28 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={JapanLogo} 
                        team2Logo={SamoaLogo} 
                        team1Name="JAPAN" 
                        team2Name="SAMOA" 
                        pool="Pool D" 
                        stadium="Stadium de Toulouse" 
                        city="Toulouse"
                        />
                    <Title>Vendredi, 29 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="VENDREDI" 
                        date="29 septembre" 
                        time="heure locale 21:00" 
                        team1Logo={NewZealandLogo} 
                        team2Logo={ItalyLogo} 
                        team1Name="NEW ZEALAND" 
                        team2Name="ITALY" 
                        pool="Pool A" 
                        stadium="OL Stadium" 
                        city="Lyon"
                        />
                    <Title>Samedi, 30 SEPTEMBRE</Title>
                    <MatchComponent 
                        day="SAMEDI" 
                        date="30 septembre" 
                        time="heure locale 15:00" 
                        team1Logo={ArgentinaLogo} 
                        team2Logo={ChileLogo} 
                        team1Name="ARGENTINA" 
                        team2Name="CHILE" 
                        pool="Pool D" 
                        stadium="Stade de la Beaujoire" 
                        city="Nantes"
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="30 septembre" 
                        time="heure locale 17:45" 
                        team1Logo={FijiLogo} 
                        team2Logo={GeorgiaLogo} 
                        team1Name="FIJI" 
                        team2Name="GEORGIA" 
                        pool="Pool C" 
                        stadium="Stade de Bordeaux" 
                        city="Bordeaux"
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="30 septembre" 
                        time="heure locale 15:00" 
                        team1Logo={ScotlandLogo} 
                        team2Logo={RomaniaLogo} 
                        team1Name="SCOTLAND" 
                        team2Name="ROMANIA" 
                        pool="Pool B" 
                        stadium="Stade Pierre-Mauroy" 
                        city="Lille"
                        />
                    <Title>Dimanche, 1 OCTOBRE</Title>
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="1 octobre" 
                        time="heure locale 17:45" 
                        team1Logo={AustraliaLogo} 
                        team2Logo={PortugalLogo} 
                        team1Name="AUSTRALIA" 
                        team2Name="PORTUGAL" 
                        pool="Pool C" 
                        stadium="Stade Geoffroy-Guichard" 
                        city="Saint-Étienne"
                        />
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="1 octobre" 
                        time="heure locale 21:00" 
                        team1Logo={SouthAfricaLogo} 
                        team2Logo={TongaLogo} 
                        team1Name="SOUTH AFRICA" 
                        team2Name="TONGA" 
                        pool="Pool B" 
                        stadium="Stade de Marseille" 
                        city="Marseille"
                        />
                    <Title>Jeudi, 5 OCTOBRE</Title>
                    <MatchComponent 
                        day="JEUDI" 
                        date="5 octobre" 
                        time="heure locale 21:00" 
                        team1Logo={NewZealandLogo} 
                        team2Logo={UruguayLogo} 
                        team1Name="NEW ZEALAND" 
                        team2Name="URUGUAY" 
                        pool="Pool A" 
                        stadium="OL Stadium" 
                        city="Lyon"
                        />
                    <Title>Vendredi, 6 OCTOBRE</Title>
                    <MatchComponent 
                        day="VENDREDI" 
                        date="6 octobre" 
                        time="heure locale 21:00" 
                        team1Logo={ArgentinaLogo} 
                        team2Logo={ChileLogo} 
                        team1Name="ARGENTINA" 
                        team2Name="CHILE" 
                        pool="Pool A" 
                        stadium="OL Stadium" 
                        city="Lyon"
                        />
                    <Title>Samedi, 7 OCTOBRE</Title>
                    <MatchComponent 
                        day="SAMEDI" 
                        date="7 octobre" 
                        time="heure locale 15:00" 
                        team1Logo={WalesLogo} 
                        team2Logo={GeorgiaLogo} 
                        team1Name="WALES" 
                        team2Name="GEORGIA" 
                        pool="Pool C" 
                        stadium="Stade de la Beaujoire" 
                        city="Nantes"
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="7 octobre" 
                        time="heure locale 17:45" 
                        team1Logo={EnglandLogo} 
                        team2Logo={SamoaLogo} 
                        team1Name="ENGLAND" 
                        team2Name="SAMOA" 
                        pool="Pool D" 
                        stadium="Stade Pierre-Mauroy" 
                        city="Lille"
                        />
                    <MatchComponent 
                        day="SAMEDI" 
                        date="7 octobre" 
                        time="heure locale 21:00" 
                        team1Logo={IrelandLogo} 
                        team2Logo={ScotlandLogo} 
                        team1Name="IRELAND" 
                        team2Name="SCOTLAND" 
                        pool="Pool B" 
                        stadium="Stade de France" 
                        city="Saint-Denis"
                        />
                    <Title>Dimanche, 8 OCTOBRE</Title>
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="8 octobre" 
                        time="heure locale 13:00" 
                        team1Logo={JapanLogo} 
                        team2Logo={ArgentinaLogo} 
                        team1Name="JAPAN" 
                        team2Name="ARGENTINA" 
                        pool="Pool D" 
                        stadium="Stade de la Beaujoire" 
                        city="Nantes"
                        />
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="8 octobre" 
                        time="heure locale 17:45" 
                        team1Logo={TongaLogo} 
                        team2Logo={RomaniaLogo} 
                        team1Name="TONGA" 
                        team2Name="ROMANIA" 
                        pool="Pool B" 
                        stadium="Stade Pierre-Mauroy" 
                        city="Lille"
                        />
                    <MatchComponent 
                        day="DIMANCHE" 
                        date="8 octobre" 
                        time="heure locale 21:00" 
                        team1Logo={FijiLogo} 
                        team2Logo={PortugalLogo} 
                        team1Name="FIJI" 
                        team2Name="PORTUGAL" 
                        pool="Pool C" 
                        stadium="Stadium de Toulouse" 
                        city="Toulouse"
                        />
                </ContentContainer>
            </MainContainer>
        </Page>
    );
};

export default Matchs;
