import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useSignOutMutation } from 'dal/auth/authAPI';
import { LOGIN } from 'utils/RoutesPathConstants';
import ModalWindow from '../ModalWindow/ModalWindow';

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  height: 60px;
  border-bottom: 1px solid gray;
  justify-content: flex-end;
  padding: 15px;
`;
//
// const StyledNavLink = styled(NavLink)`
//   margin: 5px;
//   color: black;
// `;

const Header = () => {
  const navigate = useNavigate();
  const [signOut] = useSignOutMutation();

  const logOutHandler = () => {
    signOut();
    navigate(LOGIN);
  };
  return (
    <StyledHeader>
      {/*<StyledNavLink to={PROFILE}>Home</StyledNavLink>*/}
      {/*<StyledNavLink to={LOGIN}>Login</StyledNavLink>*/}
      {/*<StyledNavLink to={REGISTRATION}>Registration</StyledNavLink>*/}
      <ModalWindow />
      <Button style={{ marginLeft: '15px' }} onClick={logOutHandler}>
        Logout
      </Button>
    </StyledHeader>
  );
};

export default Header;
