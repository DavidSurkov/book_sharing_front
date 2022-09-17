import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledPreloader = styled.div`
  text-align: center;
  z-index: 1;
  position: absolute;
  bottom: 25px;
  left: 25px;
`;

const StyledTitle = styled.div`
  color: black;
  margin-left: 5px;
  text-transform: uppercase;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
`;

const opacity = keyframes`
  0% {
    opacity: 1;
    height: 15px;
  }
  50% {
    opacity: 0;
    height: 12px;
  }
  100% {
    opacity: 1;
    height: 15px;
  }
`;

const StyledLine = styled.div`
  width: 1px;
  height: 15px;
  background: black;
  margin: 2px;
  display: inline-block;
  animation: ${opacity} 1000ms infinite ease-in-out;
`;

const StyledLine1 = styled(StyledLine)`
  animation-delay: 800ms;
`;

const StyledLine2 = styled(StyledLine)`
  animation-delay: 600ms;
`;

const StyledLine3 = styled(StyledLine)`
  animation-delay: 400ms;
`;

const StyledLine4 = styled(StyledLine)`
  animation-delay: 200ms;
`;

const StyledLine6 = styled(StyledLine)`
  animation-delay: 200ms;
`;

const StyledLine7 = styled(StyledLine)`
  animation-delay: 400ms;
`;

const StyledLine8 = styled(StyledLine)`
  animation-delay: 600ms;
`;

const StyledLine9 = styled(StyledLine)`
  animation-delay: 800ms;
`;

const Preloader: FC = () => {
  return (
    <StyledPreloader>
      <StyledLine1></StyledLine1>
      <StyledLine2></StyledLine2>
      <StyledLine3></StyledLine3>
      <StyledLine4></StyledLine4>
      <StyledLine></StyledLine>
      <StyledLine6></StyledLine6>
      <StyledLine7></StyledLine7>
      <StyledLine8></StyledLine8>
      <StyledLine9></StyledLine9>
      <StyledTitle>Loading</StyledTitle>
    </StyledPreloader>
  );
};

export default Preloader;
