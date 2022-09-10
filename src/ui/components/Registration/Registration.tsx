import { FC } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../Routs/Routs';

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Registration: FC = () => {
  return (
    <StyledForm>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm password" />
      <button type="button">Sign up</button>
      <div>
        <span>Already have an account?</span>
        <NavLink to={PATH.LOGIN}>Login</NavLink>
      </div>
    </StyledForm>
  );
};

export default Registration;
