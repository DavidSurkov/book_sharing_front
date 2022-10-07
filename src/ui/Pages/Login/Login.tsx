import React, { FC, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FORGOT_PASSWORD, HOME, REGISTRATION } from 'utils/constants/RoutesPathConstants';
import { Controller, useForm } from 'react-hook-form';
import { Form, notification } from 'antd';
import { emailRegExp } from 'utils/constants/regExp';
import { useSignInMutation } from 'dal/auth/authAPI';
import Preloader from 'ui/components/Preloader/Preloader';
import {
  StyledButton,
  StyledErrorSpanEmail,
  StyledErrorSpanPass,
  StyledInput,
  StyledInputPassword,
  StyledLinksWrapper,
  StyledLoginContainer,
  StyledLoginForm,
} from './Login.styles';

type LoginFormTypes = {
  email: string;
  password: string;
};

type NotificationType = 'success' | 'error';

const Login: FC = () => {
  const navigate = useNavigate();
  const [signIn, { error, isLoading, isSuccess, isError }] = useSignInMutation();

  useEffect(() => {
    if (isError) {
      openLoginNotification('error', error);
    }
    if (isSuccess) {
      openLoginNotification('success');
      navigate(HOME);
    }
  }, [isError, isSuccess]);

  const openLoginNotification = (type: NotificationType, error?: any) => {
    notification[type]({
      message: `${type === 'success' ? 'Success' : 'Error'}`,
      description: `${type === 'success' ? '' : error.data?.message}`,
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormTypes>();
  const onSubmit = (data: LoginFormTypes) => {
    const { email, password } = data;
    signIn({ email, password });
  };

  return (
    <StyledLoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLoginForm>
          <Controller
            render={({ field }) => <StyledInput {...field} placeholder="Email" />}
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: { message: 'Email is required', value: true },
              pattern: { message: 'Email is not correct', value: emailRegExp },
            }}
          />
          <Controller
            render={({ field }) => <StyledInputPassword {...field} placeholder="Password" />}
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: { message: 'Password is required', value: true },
              minLength: { message: 'Password should be more then 8 char', value: 8 },
            }}
          />

          <Form.Item>
            <StyledButton htmlType="submit">Sign in</StyledButton>
          </Form.Item>
          <StyledLinksWrapper>
            <div>
              <span>New user?</span>
              <NavLink to={REGISTRATION}>Sign up</NavLink>
            </div>
            <NavLink to={FORGOT_PASSWORD}> Forgot password</NavLink>
          </StyledLinksWrapper>
        </StyledLoginForm>
      </form>

      {errors.email && <StyledErrorSpanEmail>{errors.email?.message}</StyledErrorSpanEmail>}
      {errors.password && <StyledErrorSpanPass>{errors.password?.message}</StyledErrorSpanPass>}
      {isLoading && <Preloader />}
    </StyledLoginContainer>
  );
};

export default Login;
