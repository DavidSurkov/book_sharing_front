import { Button } from 'antd';
import styled from 'styled-components';
import { ERROR_COLOR, PINK_NORMAL, WHITE } from 'utils/constants/colorConstants';

export const ToggleModalButton = styled(Button)`
  width: 120px;
  margin: 0 10px;
  font-weight: bold;
  border-radius: 24px;
  height: 32px;
  outline: none;
  border: none;
  &:enabled {
    background: ${PINK_NORMAL};
    color: ${WHITE};
  }
`;

export const StyledGenreDateWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledUploadWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: 100%;
`;

export const StyledUploadFileWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: center;
`;

export const StyledUploadPosterWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: center;
`;

export const ElementErrorWrapper = styled.div<{ isError?: boolean }>`
  width: 100%;
  border: ${({ isError }) => (isError ? `1px solid ${ERROR_COLOR}` : '')};
`;
