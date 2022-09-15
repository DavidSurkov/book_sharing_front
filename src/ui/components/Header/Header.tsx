import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useSignOutMutation } from '../../../dal/auth/authAPI';
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
  const navigate = useNavigate();
  const [signOut, { isSuccess, isError, isLoading }] = useSignOutMutation();

  const logOutHandler = () => {
    signOut();
  };
  return (
    <StyledHeader>
      <StyledNavLink to={PROFILE}>Profile</StyledNavLink>
      <StyledNavLink to={LOGIN}>Login</StyledNavLink>
      <StyledNavLink to={REGISTRATION}>Registration</StyledNavLink>
      <Button onClick={logOutHandler}>Logout</Button>
    </StyledHeader>
  );
};

export default Header;
