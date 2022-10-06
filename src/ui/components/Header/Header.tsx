import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useSignOutMutation } from 'dal/auth/authAPI';
import { LOGIN, SEARCH } from 'utils/constants/RoutesPathConstants';
import ModalWindow from '../ModalWindow/ModalWindow';
import { signOutUser } from '../../../bll/user-slice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  height: 60px;
  border-bottom: 1px solid gray;
  justify-content: flex-end;
  padding: 15px;
`;

const SearchBlock = styled(NavLink)`
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

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user);
  const [signOut] = useSignOutMutation();

  const logOutHandler = () => {
    signOut();
    dispatch(signOutUser());
    navigate(LOGIN);
  };
  return (
    <StyledHeader>
      <SearchBlock to={SEARCH}>Search</SearchBlock>
      <ModalWindow />
      <div>
        <p>{userName.name}</p>
        <p>{userName.email}</p>
      </div>
      <Button style={{ marginLeft: '15px' }} onClick={logOutHandler}>
        Logout
      </Button>
    </StyledHeader>
  );
};

export default Header;
