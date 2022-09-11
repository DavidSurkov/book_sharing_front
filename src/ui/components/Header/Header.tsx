import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LOGIN, PROFILE, REGISTRATION } from '../../../utils/RoutesPathConstants';

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
      <StyledNavLink to={PROFILE}>Profile</StyledNavLink>
      <StyledNavLink to={LOGIN}>Login</StyledNavLink>
      <StyledNavLink to={REGISTRATION}>Registration</StyledNavLink>
    </StyledHeader>
  );
};

export default Header;
