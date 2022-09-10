import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin-top: 200px;
  color: #61dafb;
`;

const StyledH2 = styled.h2`
  color: red;
`;

const Error404 = () => {
  return (
    <div>
      <StyledH1>Page not found</StyledH1>
      <StyledH2>Error 404</StyledH2>
    </div>
  );
};

export default Error404;
