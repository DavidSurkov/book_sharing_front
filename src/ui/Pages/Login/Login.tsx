import { FORGOT_PASSWORD, REGISTRATION } from 'utils/constants/RoutesPathConstants';
import { Controller, useForm } from 'react-hook-form';
import { emailRegExp } from 'utils/constants/regExp';
import { useSignInMutation } from 'services/auth/authAPI';
import Preloader from 'ui/components/Preloader/Preloader';
import { NewUserWrapper, StyledDiv, StyledLinksWrapper } from 'ui/Pages/Login/Login.styles';
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
import {
  NOT_CORRECT_EMAIL,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
  TO_SHORT_PASSWORD,
} from 'utils/constants/errorConatants';

type LoginFormTypes = {
  email: string;
  password: string;
};

const Login = () => {
  const [signIn, { isLoading }] = useSignInMutation();

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
              required: { message: REQUIRED_EMAIL, value: true },
              pattern: { message: NOT_CORRECT_EMAIL, value: emailRegExp },
            }}
          />
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
          <StyledDiv></StyledDiv>
          <StyledLinksWrapper>
            <NewUserWrapper>
              <StyledSpan>New user?</StyledSpan>
              <StyledNavLink to={REGISTRATION}>Sign up</StyledNavLink>
            </NewUserWrapper>
            <StyledNavLink to={FORGOT_PASSWORD}> Forgot password</StyledNavLink>
          </StyledLinksWrapper>
          <ShiftedElement isShifted={!!errors.email || !!errors.password} initialTop={'65%'} initialLeft={'50px'}>
            <Button disabled={!!errors.email || !!errors.password}>Sign in</Button>
          </ShiftedElement>
        </StyledForm>
      </form>

      {errors.email && <StyledErrorSpanEmail>{errors.email?.message}</StyledErrorSpanEmail>}
      {errors.password && <StyledErrorSpanPass>{errors.password?.message}</StyledErrorSpanPass>}
      {isLoading && <Preloader left={'25px'} bottom={'25px'} isAbsolute={'absolute'} />}
    </StyledContainer>
  );
};

export default Login;
