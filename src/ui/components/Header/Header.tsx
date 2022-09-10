import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../Routs/Routs';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  height: 60px;
  border-bottom: 1px solid gray;
`;

const StyledNavLink = styled(NavLink)`
  margin: 5px;
  color: black;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavLink to={PATH.PROFILE}>Profile</StyledNavLink>
      <StyledNavLink to={PATH.LOGIN}>Login</StyledNavLink>
      <StyledNavLink to={PATH.REGISTRATION}>Registration</StyledNavLink>
    </StyledHeader>
  );
};

export default Header;
