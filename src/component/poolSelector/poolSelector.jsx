import React, { useState } from 'react';
import styled from 'styled-components';

const PoolContainer = styled.div`
  position: absolute;
  top: 184px; 
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  background: #FFF;
  border-radius: 6.4px;
`;


const Pool = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  color: #19194B;
  background-color: ${props => props.isActive ? '#19194B' : '#fff'};
  color: ${props => props.isActive ? '#fff' : '#19194B'};
  cursor: pointer;
  border-radius: 6.4px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const PoolComponent = (props) => {
  const [activePool, setActivePool] = useState('POOL A');
  
  const pools = ['POOL A', 'POOL B', 'POOL C', 'POOL D'];

  const handlePoolClick = (pool) => {
    setActivePool(pool);
    props.onChange(pool);
  }

  return (
    <PoolContainer>
      {pools.map(pool => (
        <Pool 
          key={pool}
          isActive={activePool === pool}
          onClick={() => handlePoolClick(pool)}
        >
          {pool}
        </Pool>
      ))}
    </PoolContainer>
  );
};

export default PoolComponent;
