import React, { useState } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CheckboxLink = styled.a`
  color: #fff;
  text-underline-offset: 4px;
  text-decoration-thickness: 0.8px;
`;

const CheckboxLine = ({ texte, forgot }) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxContainer>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="checkbox-text">{texte}</span>
      </CheckboxLabel>
      <CheckboxLink href="/visitors/forgot-password">{forgot}</CheckboxLink>
    </CheckboxContainer>
  );
};

export default CheckboxLine;
