import { Input, Select } from 'antd';
import styled from 'styled-components';

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
  //background-color: gray;
`;

export const StyledUploadFileWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  //background-color: gray;
  align-items: center;
`;

export const StyledUploadPosterWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  //background-color: gray;
  align-items: center;
`;

export const StyledInput = styled(Input)<{ isError?: boolean }>`
  width: 100%;
  border-color: ${({ isError }) => (isError ? 'red' : '')};
`;

export const StyledSelect = styled(Select)<{ isError?: boolean }>`
  width: 220px;
  border: ${({ isError }) => (isError ? '1px solid red' : '')};
`;

export const StyledTextArea = styled(Input.TextArea)<{ isError?: boolean }>`
  width: 100%;
  border: ${({ isError }) => (isError ? '1px solid red' : '')};
`;
