import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../Routs/Routs';
import styled from 'styled-components';

const StyledLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Login: FC = () => {
  return (
    <StyledLoginWrapper>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="button">Login</button>
      <StyledLinksWrapper>
        <div>
          <span>New user?</span>
          <NavLink to={PATH.REGISTRATION}>Sign up</NavLink>
        </div>
        <NavLink to={PATH.FORGOT_PASSWORD}> Forgot password</NavLink>
      </StyledLinksWrapper>
    </StyledLoginWrapper>
  );
};

export default Login;
