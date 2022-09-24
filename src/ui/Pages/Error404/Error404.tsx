import React from 'react';
import styled from 'styled-components';

const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 60px);
`;

const StyledH1 = styled.h1`
  color: #61dafb;
  font-size: 45px;
`;

const StyledH2 = styled.h2`
  color: red;
  font-size: 35px;
`;

const Error404 = () => {
  return (
    <StyledErrorWrapper>
      <StyledH1>Page not found</StyledH1>
      <StyledH2>Error 404</StyledH2>
    </StyledErrorWrapper>
  );
};

export default Error404;
