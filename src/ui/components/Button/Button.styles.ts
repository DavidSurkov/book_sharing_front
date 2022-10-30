import styled from 'styled-components';

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
  background-color: ${({ backgroundColor }) => backgroundColor || '#231d4f'};
  color: ${({ textColor }) => textColor || '#f5f5fa'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  border-radius: ${({ borderRadius }) => borderRadius || '24px'};
  padding: 0.4em 1em;
  border: none;
  transition: 0.1s ease-in-out;
  &:hover {
    border: none;
    color: ${({ hoverTextColor }) => hoverTextColor || '#ffffff'};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#a847cc'};
    border-radius: ${({ borderRadius }) => borderRadius || '24px'};
  }
  &:disabled {
    border: none;
    color: ${({ textColor }) => textColor || '#ffffff'};
    background-color: ${({ disabledBackgroundColor }) => disabledBackgroundColor || 'rgba(168,71,204,0.3)'};
    border-radius: ${({ borderRadius }) => borderRadius || '24px'};
  }
`;
