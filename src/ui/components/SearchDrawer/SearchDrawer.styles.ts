import styled from 'styled-components';
import { Button, Input, Radio } from 'antd';
import { RadioButtonProps } from 'antd/lib/radio/radioButton';

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
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled(Button)`
  background-color: #90e95c;
  color: white;
  border: none;

  &:hover {
    background-color: #90e95c;
    color: #020301;
  }
`;

export const StyledLabel = styled.label`
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 22px;
  color: white;
`;

export const StyledInput = styled(Input)`
  background-color: #020301;
  border: none;
  color: #90e95c;
  font-weight: 500;
  font-family: Arial, sans-serif;
  font-size: 18px;
  border-radius: 3px;
`;

export const StyledInputNumber = styled(Input)`
  background-color: #020301;
  border: none;
  color: #90e95c;
  font-weight: 500;
  font-family: Arial, sans-serif;
  font-size: 18px;
  margin-left: 10px;
  border-radius: 3px;
`;

export const StyledRadioButton = styled(Radio.Button)<RadioButtonProps>`
  border-radius: 3px;
  outline: none;
  background-color: ${(props) => (props.checked ? '#90e95c' : '#020301')};
  margin: 5px;
  color: #90e95c;
  border-color: #020301;

  &:hover {
    background-color: #90e95c;
    color: #020301;
    border-color: #90e95c;
  }
`;
