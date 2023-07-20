import React, { useContext } from 'react';
import styled from 'styled-components';
import { MatchContext  } from '../../pages/matchs/matchContext';
import { useNavigate } from 'react-router-dom';


const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  background-color: #19194B;
  color: #fff;
  border-radius: 6.4px;
  height: 100px;
  margin-bottom: 16px;
`;

const DateContainer = styled.div`
  text-align: left;
  padding-left: 16px;

  h2 {
    margin-bottom: 0px;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    margin: 0px 0px 10px;
  }
`;

const Divider = styled.div`
  width: 0.6px;
  height: 80%;
  background-color: #fff;
  margin: 0 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const TeamDetails = styled.div`
  margin-left: 10px;
  text-align: left;
  width: 100%;

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 10px;
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 6.4px;
  border: 1px solid red;
  color: red;
  padding: 8px 6px;
  cursor: pointer;
  margin-right: 16px;
`;

  const MatchComponent = ({ 
    team1Logo,
    team2Logo,
    team1Name,
    team2Name,
    day,
    date,
    time,
    pool,
    stadium,
    city}) => {

  const { setMatchData } = useContext(MatchContext);
  const navigate = useNavigate();

  const handleAccreditationRequest = () => {
    setMatchData({
      team1Logo,
      team2Logo,
      team1Name,
      team2Name,
    });
    navigate('/stadium');
  };

  return (
    <MatchContainer>
      <DateContainer>
        <h2>{day}</h2>
        <p>{date}</p>
        <p>{time}</p>
      </DateContainer>
      <Divider/>
      <TeamContainer>
        <Logo src={team1Logo} alt={team1Name}/>
        <Logo src={team2Logo} alt={team2Name} style={{ marginLeft: '-10px' }}/>
        <TeamDetails>
          <h2>{team1Name} v {team2Name}</h2>
          <p>{pool} {stadium}, {city}</p>
        </TeamDetails>
      </TeamContainer>
      <Divider/>
      <Button onClick={handleAccreditationRequest}>Demande d'accréditation</Button>
    </MatchContainer>
  );
};

export default MatchComponent;
