import React from "react";
import logo from '../../assets/logo.svg';
import UserDropdown from "./UserDropdown";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 50;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0 40px;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 40px;
`;

const HeaderLinks = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.isPrimary ? '#2d3748' : '#718096'};
  margin-right: 40px;
`;

const DropdownContainer = styled.div`
  margin-left: auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLinks href="/" isPrimary>
          <Logo src={logo} alt="logo" href="/"/>
        </HeaderLinks>
        <HeaderLinks href="/welcomePage" isPrimary>
          Matchs
        </HeaderLinks>
        <HeaderLinks href="/poules">
          Poules
        </HeaderLinks>
        <HeaderLinks href="/">
          Faire une demande
        </HeaderLinks>
        <HeaderLinks href="/">
          Vos accréditations
        </HeaderLinks>
        <HeaderLinks href="/chat">
          Chat
        </HeaderLinks>
        <DropdownContainer>
          <UserDropdown />
        </DropdownContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
