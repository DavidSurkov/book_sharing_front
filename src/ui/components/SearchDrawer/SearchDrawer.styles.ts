import styled from 'styled-components';
import { Button, Input, Radio } from 'antd';
import { RadioButtonProps } from 'antd/lib/radio/radioButton';
import { DARK_BLUE, DARK_PINK, WHITE } from 'utils/constants/colorConstants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  gap: 20px;
  font-size: var(--FONT_SIZE_18);
`;

export const Block = styled.div<{ maxWidth?: string }>`
  text-align: center;
  max-width: ${(props) => props.maxWidth};
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled(Button)`
  background-color: ${DARK_BLUE};
  color: ${WHITE};
  border: none;

  &:hover {
    background-color: ${DARK_BLUE};
    color: ${WHITE};
  }
`;

export const StyledLabel = styled.label`
  font-weight: var(--FONT_BOLD);
  font-size: var(--FONT_SIZE_20);
  color: ${WHITE};
`;

export const StyledInput = styled(Input)`
  background-color: ${WHITE};
  border: none;
  color: ${DARK_BLUE};
  font-size: var(--FONT_SIZE_18);
  border-radius: 3px;
`;

export const StyledInputNumber = styled(Input)`
  background-color: ${WHITE};
  border: none;
  color: ${DARK_BLUE};
  font-size: var(--FONT_SIZE_18);
  margin-left: 10px;
  border-radius: 3px;
`;

export const StyledRadioButton = styled(Radio.Button)<RadioButtonProps>`
  border-radius: 3px;
  outline: none;
  /*TODO bg color doesnt work need to fix*/
  background-color: ${(props) => (props.checked ? `${DARK_PINK}` : `${WHITE}`)};
  margin: 5px;
  color: ${DARK_BLUE};
  border-color: ${WHITE};

  &:hover {
    background-color: ${DARK_BLUE};
    color: ${WHITE};
    border-color: ${DARK_BLUE};
  }
`;
