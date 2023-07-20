import React, { useState } from 'react';
import Header from '../../component/header/header';
import styled from 'styled-components';
import PoolSelector from '../../component/poolSelector/poolSelector';
import Classement from '../../component/ranking/ranking';
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
  position: relative;
  min-height: 100vh;
  background: #2A37E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 100px;

  Classement:first-child {
    color: red;
  }

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

const DivSeparator = styled.div`
    height: 200px;
`;

const TextLine = styled.div`
    position: absolute;
    top: 128px;
    width: 100%;
    height: 1px;
`;

const FirstClassement = styled.div`
  color: white
`;

const Poules = () => {
    const [activePool, setActivePool] = useState('POOL A');

    const handlePoolChange = (pool) => {
        setActivePool(pool);
    };

    const getClassmentData = () => {
        if (activePool === 'POOL A') {
            return [
                {
                    logo: NewZealandLogo,
                    title: 'NEW ZEALAND',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: FranceLogo,
                    title: 'FRANCE',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: ItalyLogo,
                    title: 'ITALY',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: UruguayLogo,  
                    title: 'URUGUAY',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: NamibiaLogo,
                    title: 'NAMIBIA',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
            ];
        } else if (activePool === 'POOL B') {
            return [
                {
                    logo: SouthAfricaLogo,
                    title: 'SOUTH AFRICA',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: IrelandLogo,
                    title: 'IRELAND',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: ScotlandLogo,
                    title: 'SCOTLAND',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: TongaLogo,
                    title: 'TONGA',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: RomaniaLogo,
                    title: 'ROMANIA',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
            ];
        } else if (activePool === 'POOL C') {
            return [
                {
                    logo: WalesLogo,
                    title: 'WALES',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: AustraliaLogo,
                    title: 'AUSTRALIA',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: FijiLogo,
                    title: 'Fiji',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: GeorgiaLogo,
                    title: 'Georgia',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: PortugalLogo,
                    title: 'PORTUGAL',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
            ];
        } else if (activePool === 'POOL D') {
            return [
                {
                    logo: EnglandLogo,
                    title: 'ENGLAND',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: JapanLogo,
                    title: 'JAPAN',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: ArgentinaLogo,
                    title: 'ARGENTINA',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: SamoaLogo,
                    title: 'SAMOA',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
                {
                    logo: ChileLogo,
                    title: 'CHILE',
                    numbers: new Array(9).fill(0),
                    lastNumber: 0,
                    width: '80%',
                    mainSectionBackgroundColor: '#fff',
                    numbersMarginLeft: '200px',
                    separatorBackgroundColor: '#f0f0f0'
                },
            ];        }

        return [];
    };

    return (
        <Page>
            <Header/>
            <UnderHeader>
                toutes les poules
            </UnderHeader>
            <PoolSelector onChange={handlePoolChange} />
            <TextLine />
            <DivSeparator></DivSeparator>
            <Classement 
                logo=""
                title=""
                numbers={['PL.', 'V.', 'N.', 'D.', 'P.', 'PC.', '+/-', 'EM.', 'BP.']}
                lastNumber="PTS"
                numbersMarginLeft='200px'
                mainSectionBackgroundColor="none"
                separatorBackgroundColor="none"
                textColor="#fff"
                separatorPadding=" 0 5px 0 15px"
            />
            <div style={{ marginTop: '-20px' }}></div>
            {getClassmentData().map((classement, index) => (
                <Classement
                    key={index}
                    logo={classement.logo}
                    title={classement.title}
                    numbers={classement.numbers}
                    lastNumber={classement.lastNumber}
                    width={classement.width}
                    mainSectionBackgroundColor={classement.mainSectionBackgroundColor}
                    numbersMarginLeft={classement.numbersMarginLeft}
                    separatorBackgroundColor={classement.separatorBackgroundColor}
                />
            ))}
        </Page>
    );
};

export default Poules;
