import styled from 'styled-components';
import { MatchContext } from '../../pages/matchs/matchContext';
import React, { useContext } from 'react';

const Logos = styled.div`
    position: relative;
    width: 100px;
    display: flex;
    align-items: center;

    img {
        position: absolute;
        width: 50px;
        height: 50px;
    }

    img:last-child {
        left: 30px;
    }
`;

const Container = styled.div`
    position: absolute;
    top: 84px;
    width: 100%;
    height: 80px;
    background-color: #19194B;
    display: flex;
    align-items: center;
    justify-content: left;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    padding-left: 50px; 
    color: #ffffff;
    font-size: 20px;
    text-transform: uppercase;
`;

const Title = styled.h1`
    font-size: 24px; 
`;

const Subtitle = styled.p`
    font-size: 14px; 
`;

const UnderHeader = ({team1,team2 , subtitle, logo1, logo2}) => {

    const { matchData } = useContext(MatchContext);

    return (
        <Container>
            <Logos>
                <img src={logo1} alt="Logo 1" />
                <img src={logo2} alt="Logo 2" />
            </Logos>
            <div>
                <Title>{team1} v {team2}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </div>
        </Container>
    );
}

export default UnderHeader;
