import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 80%;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--button-background-color);
  font-size: 14px;
`;

const StyledImage = styled.img`
  height: 24px;
  width: auto;
  margin-right: 10px;
`;

function Button({ text, logoSrc, backgroundColor, color }) {
  return (
    <StyledButton className="button" style={{ backgroundColor, color }}>
      {logoSrc && (
        <StyledImage src={logoSrc} alt="Logo" className="button-logo" />
      )}
      {text}
    </StyledButton>
  );
}

export default Button;
