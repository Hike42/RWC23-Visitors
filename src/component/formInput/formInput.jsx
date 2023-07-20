import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const InputTitle = styled.label`
  text-align: left;
  margin-bottom: 12px;
`;

const InputField = styled.input`
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

const Input = ({ title, placeholder }) => (
  <Wrapper>
    <InputTitle>{title}</InputTitle>
    <InputField type="text" placeholder={placeholder} />
  </Wrapper>
);

export default Input;
