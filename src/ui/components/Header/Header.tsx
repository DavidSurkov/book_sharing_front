import React from 'react';
import { useSignOutMutation } from 'dal/auth/authAPI';
import { LOGIN } from 'utils/constants/RoutesPathConstants';
import ModalWindow from 'ui/components/ModalWindow/ModalWindow';
import { useAppSelector } from 'dal/hooks/hooks';
import {
  LogoutButton,
  ModalButton,
  SearchBlock,
  StyledHeader,
  StyledParagraph,
  UserInfoWrapper,
} from './Header.styles';
import { useNotificationAndNavigate } from 'utils/hooks/use-notification-and-navigate.hook';
import { useToggleDrawer } from '../../../utils/hooks/use-toggle-drawer.hook';

const Header = () => {
  const userName = useAppSelector((state) => state.user);
  const [signOut, { isSuccess, isError, error }] = useSignOutMutation();
  const { toggleDrawer } = useToggleDrawer();
  useNotificationAndNavigate(isSuccess, isError, error, '', LOGIN);

  const logOutHandler = () => {
    signOut();
  };

  const openSearchHandler = () => {
    toggleDrawer();
  };

  return (
    <StyledHeader>
      <SearchBlock onClick={openSearchHandler}>Search</SearchBlock>
      <ModalButton>
        <ModalWindow />
      </ModalButton>

      <UserInfoWrapper>
        <StyledParagraph>{userName.name}</StyledParagraph>
        {/*<StyledParagraph>{userName.email}</StyledParagraph>*/}
      </UserInfoWrapper>
      <LogoutButton onClick={logOutHandler}>Logout</LogoutButton>
    </StyledHeader>
  );
};

export default Header;
