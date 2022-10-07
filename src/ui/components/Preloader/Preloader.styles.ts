import styled, { keyframes } from 'styled-components';

export const StyledPreloader = styled.div`
  text-align: center;
  z-index: 1;
  position: absolute;
  bottom: 25px;
  left: 25px;
`;

export const StyledTitle = styled.div`
  color: black;
  margin-left: 5px;
  text-transform: uppercase;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
`;

export const opacity = keyframes`
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

export const StyledLine = styled.div`
  width: 1px;
  height: 15px;
  background: black;
  margin: 2px;
  display: inline-block;
  animation: ${opacity} 1000ms infinite ease-in-out;
`;

export const StyledLine1 = styled(StyledLine)`
  animation-delay: 800ms;
`;

export const StyledLine2 = styled(StyledLine)`
  animation-delay: 600ms;
`;

export const StyledLine3 = styled(StyledLine)`
  animation-delay: 400ms;
`;

export const StyledLine4 = styled(StyledLine)`
  animation-delay: 200ms;
`;

export const StyledLine6 = styled(StyledLine)`
  animation-delay: 200ms;
`;

export const StyledLine7 = styled(StyledLine)`
  animation-delay: 400ms;
`;

export const StyledLine8 = styled(StyledLine)`
  animation-delay: 600ms;
`;

export const StyledLine9 = styled(StyledLine)`
  animation-delay: 800ms;
`;
