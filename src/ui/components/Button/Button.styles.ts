import styled from 'styled-components';
import { DARK_BLUE, DARK_PINK, DISABLED_PINK, WHITE } from 'utils/constants/colorConstants';

export interface IStyledCustomButton {
  width?: string;
  margin?: string;
  backgroundColor?: string;
  textColor?: string;
  fontWeight?: string;
  borderRadius?: string;
  hoverTextColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderRadius?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
}

export const StyledCustomButton = styled.button<IStyledCustomButton>`
  cursor: pointer;
  width: ${({ width }) => width || '200px'};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor }) => backgroundColor || `${DARK_BLUE}`};
  color: ${({ textColor }) => textColor || `${WHITE}`};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  border-radius: ${({ borderRadius }) => borderRadius || '24px'};
  padding: 0.4em 1em;
  border: none;
  transition: 0.1s ease-in-out;
  &:hover {
    border: none;
    color: ${({ hoverTextColor }) => hoverTextColor || `${WHITE}`};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || `${DARK_PINK}`};
    border-radius: ${({ borderRadius }) => borderRadius || '24px'};
  }
  &:disabled {
    border: none;
    color: ${({ textColor }) => textColor || `${WHITE}`};
    background-color: ${({ disabledBackgroundColor }) => disabledBackgroundColor || `${DISABLED_PINK}`};
    border-radius: ${({ borderRadius }) => borderRadius || '24px'};
  }
`;
