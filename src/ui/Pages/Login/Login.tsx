import { FORGOT_PASSWORD, HOME, REGISTRATION } from 'utils/constants/RoutesPathConstants';
import { Controller, useForm } from 'react-hook-form';
import { emailRegExp } from 'utils/constants/regExp';
import { useSignInMutation } from 'services/auth/authAPI';
import Preloader from 'ui/components/Preloader/Preloader';
import { NewUserWrapper, StyledLinksWrapper } from './Login.styles';
import { useNotificationAndNavigate } from '../../../utils/hooks/use-notification-and-navigate.hook';
import logo from 'utils/assets/logo.png';
import {
  StyledContainer,
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
import { Button } from 'ui/components/Button/Button';
import { ShiftedElement } from 'ui/components/ShiftedElement/ShiftedElement';

type LoginFormTypes = {
  email: string;
  password: string;
};

const Login = () => {
  const [signIn, { error, isLoading, isSuccess, isError }] = useSignInMutation();
  useNotificationAndNavigate(isSuccess, isError, error, 'Hello', HOME);

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
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)} style={{ position: 'relative' }}>
        <StyledForm>
          <StyledLogo src={logo} alt="Book Sharing logo" />
          <StyledTitle> Book Sharing </StyledTitle>
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
          <ShiftedElement isShifted={!!errors.email || !!errors.password} initialTop={'85%'} initialLeft={'50px'}>
            <Button disabled={!!errors.email || !!errors.password}>Sign in</Button>
          </ShiftedElement>
          <StyledLinksWrapper>
            <NewUserWrapper>
              <StyledSpan>New user?</StyledSpan>
              <StyledNavLink to={REGISTRATION}>Sign up</StyledNavLink>
            </NewUserWrapper>
            <StyledNavLink to={FORGOT_PASSWORD}> Forgot password</StyledNavLink>
          </StyledLinksWrapper>
        </StyledForm>
      </form>

      {errors.email && <StyledErrorSpanEmail>{errors.email?.message}</StyledErrorSpanEmail>}
      {errors.password && <StyledErrorSpanPass>{errors.password?.message}</StyledErrorSpanPass>}
      {isLoading && <Preloader left={'25px'} bottom={'25px'} isAbsolute={'absolute'} />}
    </StyledContainer>
  );
};

export default Login;
