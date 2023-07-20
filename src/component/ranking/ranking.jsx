import React from 'react';
import styled from 'styled-components';

const RankingContainer = styled.div`
  width: ${props => props.width || '80%'};
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-radius: 6.4px;
  margin-bottom: 18px;
`;

const MainSection = styled.div`
  background-color: ${props => props.backgroundColor || '#fff'};
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0px 30px;
  border-radius: 6.4px;
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;

  h1 {
    font-size: 20px;
    color: ${props => props.textColor || '#19194B'};
  }

  img {
    height: 40px;
    padding-right: 10px;
  }
`;

const NumbersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin-left: ${props => props.marginLeft || '200px'};

  div {
    color: ${props => props.textColor || '#19194B'};
  }
`;

const SeparatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-left: 15px;
  background-color: ${props => props.backgroundColor || '#f0f0f0'};
  padding: ${props => props.padding || '0px 15px'};
  border-radius: 6.4px;

  div {
    color: ${props => props.textColor || '#19194B'};
  }
`;

const Classement = ({logo, title, numbers, lastNumber, width, mainSectionBackgroundColor, numbersMarginLeft, separatorBackgroundColor, textColor, separatorPadding}) => {
  return (
    <RankingContainer width={width}>
      <MainSection backgroundColor={mainSectionBackgroundColor}>
        <LogoTitleWrapper textColor={textColor}>
          <img src={logo} alt="" />
          <h1>{title}</h1>
        </LogoTitleWrapper>
        <NumbersWrapper marginLeft={numbersMarginLeft} textColor={textColor}>
            {numbers && numbers.map((number, index) => (
            <div key={index}>{number}</div>
          ))}
        </NumbersWrapper>
      </MainSection>
      <SeparatorWrapper backgroundColor={separatorBackgroundColor} textColor={textColor} padding={separatorPadding}>
        <div>{lastNumber}</div>
      </SeparatorWrapper>
    </RankingContainer>
  );
};

export default Classement;
