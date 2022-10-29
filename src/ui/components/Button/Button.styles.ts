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
  top?: string;
  left?: string;
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
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transition: 0.1s ease-in-out;
  &:hover {
    border: none;
    color: ${({ hoverTextColor }) => hoverTextColor || '#ffffff'};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#a847cc'};
    border-radius: ${({ hoverBorderRadius }) => hoverBorderRadius || '24px'};
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }
  &:disabled {
    border: none;
    color: ${({ hoverTextColor }) => hoverTextColor || '#ffffff'};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || 'black'};
    border-radius: ${({ hoverBorderRadius }) => hoverBorderRadius || '24px'};
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }
`;
