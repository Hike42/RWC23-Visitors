import React from 'react';
import Header from '../../component/header/header';
import styled from 'styled-components';

const Page = styled.div`
  min-height: 100vh;
  background: #10104C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Poules = () => {
    return (
        <Page>
            <Header/>
        </Page>
    );
};

export default Poules;