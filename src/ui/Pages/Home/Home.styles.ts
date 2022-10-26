import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1330px;
  padding: 80px 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: scroll;
`;

export const RoundGreen = styled.div`
  position: absolute;
  width: 200px;
  height: 514px;
  right: 100px;
  top: 150px;
  background: #60f501;
  filter: blur(300px);
  z-index: -1;
`;

export const RoundYellow = styled.div`
  position: absolute;
  width: 200px;
  height: 514px;
  left: 100px;
  top: 450px;
  background: #f5cc01;
  filter: blur(300px);
  z-index: -1;
`;
