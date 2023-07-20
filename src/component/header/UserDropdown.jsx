import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const UserButton = styled.button`
  display: flex;
  align-items: center;
  color: #4a5568;
  font-family: "webbelliscup";
`;

const UserIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 9rem;
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: none;
  font-family: "webbelliscup";
  transition: opacity 0.3s ease;
`;

const DropdownItem = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4a5568;
  transition: opacity 0.3s ease;

  &:hover {
    background-color: transparent;
  }
`;

const LogoutItem = styled(DropdownItem)`
  color: #f56565;

  &:hover {
    color: #f56565;
  }
`;

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("Déconnexion...");
  };

  return (
    <div>
      <UserButton onClick={toggleDropdown}>
        <UserIcon
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </UserIcon>
        Utilisateur
      </UserButton>

      {isOpen && (
        <Dropdown ref={dropdownRef} style={{ top: "100%" }}>
          <DropdownItem onClick={() => console.log("Accéder au profil...")}>
            Mon profil
          </DropdownItem>
          <LogoutItem onClick={handleLogout} href="/visitors/">
            Déconnexion
          </LogoutItem>
        </Dropdown>
      )}
    </div>
  );
};

export default UserDropdown;
