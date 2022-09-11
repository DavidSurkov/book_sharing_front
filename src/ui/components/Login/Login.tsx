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
    formState: { errors },
  } = useForm<LoginFormTypes>();
  const onSubmit = (data: LoginFormTypes) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLoginWrapper>
          <Controller
            render={({ field }) => <Input {...field} placeholder="Email" />}
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
              required: { message: 'Password is required', value: true },
              minLength: { message: 'Password should be more then 4 char', value: 4 },
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
      {errors.email && <span>{errors.email?.message}</span>}
      {errors.password && <span>{errors.password?.message}</span>}
    </>
  );
};

export default Login;
