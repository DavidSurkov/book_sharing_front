import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FORGOT_PASSWORD, REGISTRATION } from '../../../utils/RoutesPathConstants';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox, Input } from 'antd';
import { emailRegExp } from '../../../utils/regExp';

type LoginFormTypes = {
  email: string;
  password: string;
  checkbox: boolean;
};

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
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormTypes>();
  const onSubmit = (data: LoginFormTypes) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledLoginWrapper>
        <Controller
          render={({ field }) => <Input {...field} type="email" placeholder="Email" />}
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: { message: 'Email is required', value: true },
            pattern: { message: 'Email is not correct', value: emailRegExp },
          }}
        />
        <Controller
          render={({ field }) => <Input.Password {...field} placeholder="Password" />}
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            minLength: { message: 'Password is to short', value: 4 },
          }}
        />
        <Controller
          render={({ field }) => (
            <Checkbox onChange={field.onChange} checked={field.value}>
              Remember me
            </Checkbox>
          )}
          name="checkbox"
          control={control}
          defaultValue={false}
        />

        <input type="submit" />
        <StyledLinksWrapper>
          <div>
            <span>New user?</span>
            <NavLink to={REGISTRATION}>Sign up</NavLink>
          </div>
          <NavLink to={FORGOT_PASSWORD}> Forgot password</NavLink>
        </StyledLinksWrapper>
      </StyledLoginWrapper>
    </form>
  );
};

export default Login;
