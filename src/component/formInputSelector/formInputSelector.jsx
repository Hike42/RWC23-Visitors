import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const InputTitle = styled.label`
  text-align: left;
  margin-bottom: 12px;
`;

const InputField = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: #dedede;
  }
`;

const SelectInput = ({ title, options = [], placeholder }) => {
  const selectedOptions = options || ["Option 1", "Option 2", "Option 3"];

  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <InputField placeholder={placeholder}>
        {selectedOptions &&
          selectedOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </InputField>
    </InputContainer>
  );
};

export default SelectInput;
