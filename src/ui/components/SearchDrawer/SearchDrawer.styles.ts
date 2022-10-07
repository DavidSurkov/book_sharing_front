import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  gap: 20px;
  font-size: 18px;
`;
export const Block = styled.div<{ maxWidth?: string }>`
  text-align: center;
  max-width: ${(props) => props.maxWidth};
`;
