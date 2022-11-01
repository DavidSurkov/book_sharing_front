import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { emailRegExp } from 'utils/constants/regExp';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
import { LOGIN } from 'utils/constants/RoutesPathConstants';
import { useSignUpMutation } from 'services/auth/authAPI';
import Preloader from 'ui/components/Preloader/Preloader';
import { StyledUserOutlined } from 'ui/Pages/Registration/Registration.styles';
import {
  StyledButton,
  StyledContainer,
  StyledErrorSpanConfirmPass,
  StyledErrorSpanEmail,
  StyledErrorSpanPass,
  StyledForm,
  StyledInput,
  StyledInputPassword,
  StyledLogo,
  StyledNavLink,
  StyledSpan,
  StyledTitle,
} from 'ui/common-styles/common.styles';
import logo from 'utils/assets/logo.png';
import { useNotificationAndNavigate } from 'utils/hooks/use-notification-and-navigate.hook';
import {
  NOT_CORRECT_EMAIL,
  REQUIRED_EMAIL,
  REQUIRED_NAME,
  REQUIRED_PASSWORD,
  TO_SHORT_PASSWORD,
} from 'utils/constants/errorConatants';

type RegistrationTypes = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const Registration = () => {
  const [signUp, { error, isLoading, isSuccess, isError }] = useSignUpMutation();
  useNotificationAndNavigate(isSuccess, isError, error, undefined, LOGIN);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationTypes>();
  const onSubmit = (data: RegistrationTypes) => {
    const { name, email, password } = data;
    signUp({ name, email, password });
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledForm>
          <StyledLogo src={logo} alt="Book Sharing logo" />
          <StyledTitle> Book Sharing </StyledTitle>
          <Controller
            render={({ field }) => <StyledInput {...field} placeholder="User name" prefix={<StyledUserOutlined />} />}
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: { message: REQUIRED_NAME, value: true },
            }}
          />

          <Controller
            render={({ field }) => <StyledInput {...field} type="email" placeholder="Email" />}
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: { message: REQUIRED_EMAIL, value: true },
              pattern: { message: NOT_CORRECT_EMAIL, value: emailRegExp },
            }}
          />

          <Space direction="vertical">
            <Controller
              render={({ field }) => <StyledInputPassword {...field} placeholder="Password" />}
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: { message: REQUIRED_PASSWORD, value: true },
                minLength: { message: TO_SHORT_PASSWORD, value: 8 },
              }}
            />
            <Controller
              render={({ field }) => (
                <StyledInputPassword
                  {...field}
                  placeholder="Confirm password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              )}
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                validate: (value: string) => {
                  if (watch('password') !== value) {
                    return 'Password do not much';
                  }
                },
              }}
            />
          </Space>
          <StyledButton htmlType="submit">Sign up</StyledButton>
          <div>
            <StyledSpan>Already have an account?</StyledSpan>
            <StyledNavLink to={LOGIN}>Login</StyledNavLink>
          </div>
        </StyledForm>
      </form>
      {errors.email && <StyledErrorSpanEmail>{errors.email?.message}</StyledErrorSpanEmail>}
      {errors.password && <StyledErrorSpanPass>{errors.password?.message}</StyledErrorSpanPass>}
      {errors.confirmPassword && (
        <StyledErrorSpanConfirmPass>{errors.confirmPassword?.message}</StyledErrorSpanConfirmPass>
      )}
      {isLoading && <Preloader isAbsolute={'absolute'} bottom={'25px'} left={'25px'} />}
    </StyledContainer>
  );
};

export default Registration;
