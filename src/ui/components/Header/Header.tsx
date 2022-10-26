import React from 'react';
import { useSignOutMutation } from 'dal/auth/authAPI';
import { HOME, LOGIN } from 'utils/constants/RoutesPathConstants';
import ModalWindow from 'ui/components/ModalWindow/ModalWindow';
import { useAppSelector } from 'dal/hooks/hooks';
import {
  LogoutIcon,
  LogoWrapper,
  StyledHeader,
  StyledImage,
  StyledParagraph,
  StyledSearchingIcon,
  UserInfoWrapper,
} from './Header.styles';
import { useNotificationAndNavigate } from 'utils/hooks/use-notification-and-navigate.hook';
import { useToggleDrawer } from 'utils/hooks/use-toggle-drawer.hook';
import { useSearchFilterHook } from 'utils/hooks/use-search-filter.hook';
import { useQueryString } from 'utils/hooks/use-query-string.hook';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import logo from '../../../utils/assets/logo.png';
// @ts-ignore
import outIcon from 'utils/assets/icons/out.svg';
// @ts-ignore
import filter from 'utils/assets/icons/filter.svg';
import { StyledInput } from '../../common-styles/common.styles';

const Header = () => {
  const navigate = useNavigate();
  const userName = useAppSelector((state) => state.user);
  const { refetch } = useQueryString();
  const [signOut, { isSuccess, isError, error }] = useSignOutMutation();
  const { toggleDrawer } = useToggleDrawer();
  useNotificationAndNavigate(isSuccess, isError, error, '', LOGIN);
  const { title, setTitleHandler } = useSearchFilterHook();

  const logOutHandler = () => {
    signOut();
  };

  const openSearchHandler = () => {
    toggleDrawer();
    navigate(HOME);
  };

  const searchingIconHandler = () => {
    refetch();
    navigate(HOME);
  };

  const clickLogoHandler = () => {
    navigate(HOME);
  };

  return (
    <StyledHeader>
      <LogoWrapper>
        <StyledImage src={logo} alt="books" onClick={clickLogoHandler} />
      </LogoWrapper>
      <StyledInput placeholder="Book name" type="text" onChange={setTitleHandler} value={title} />
      <StyledSearchingIcon onClick={searchingIconHandler} />
      <LogoutIcon src={filter} alt="Book filtration" onClick={openSearchHandler} />
      <ModalWindow />

      <UserInfoWrapper>
        <StyledParagraph>{userName.name}</StyledParagraph>
        {/*<StyledParagraph>{userName.email}</StyledParagraph>*/}
      </UserInfoWrapper>
      <LogoutIcon src={outIcon} alt="Log out icon" onClick={logOutHandler} />
    </StyledHeader>
  );
};

export default Header;
