import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Routs from '../../Routs/Routs';

const StyledMain = styled.div`
  background-color: gray;
`;

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Routs />
    </StyledMain>
  );
};

export default Main;
