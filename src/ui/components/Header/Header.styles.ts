import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  height: 60px;
  border-bottom: 1px solid gray;
  justify-content: flex-end;
  padding: 15px;
`;

export const SearchBlock = styled(NavLink)`
  color: white;
  text-decoration: none;
  background-color: dodgerblue;
  margin: 0 10px;
  padding: 4px 15px;
  border-radius: 3px;
  &:hover,
  &.active {
    background-color: white;
    color: dodgerblue;
  }
`;
