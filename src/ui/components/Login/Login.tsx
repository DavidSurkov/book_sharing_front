import { FC, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FORGOT_PASSWORD, PROFILE, REGISTRATION } from '../../../utils/RoutesPathConstants';
import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { emailRegExp } from '../../../utils/regExp';
import { useSignInMutation } from '../../../dal/auth/authAPI';
import Preloader from '../Preloader/Preloader';

type LoginFormTypes = {
  email: string;
  password: string;
  checkbox: boolean;
};

type NotificationType = 'success' | 'error';

const StyledLoginForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 200px auto;
  border: 1px solid gray;
  border-radius: 2px;
  width: 250px;
  height: 300px;
`;

const StyledInput = styled(Input)`
  max-width: 200px;
  margin-bottom: 8px;
`;

const StyledInputPassword = styled(Input.Password)`
  width: 200px;
`;

const StyledButton = styled(Button)`
  width: 200px;
  margin: 8px 0;
  color: gray;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-top: 8px;
  color: gray;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Login: FC = () => {
  const navigate = useNavigate();
  const [signIn, { data, error, isLoading, isSuccess, isError }] = useSignInMutation();

  const openLoginNotification = (type: NotificationType, error?: any) => {
    notification[type]({
      message: `${type === 'success' ? 'Success' : 'Error'}`,
      description: `${type === 'success' ? '' : error.data.message}`,
    });
  };

  useEffect(() => {
    if (isError) {
      openLoginNotification('error', error);
    }
    if (isSuccess) {
      openLoginNotification('success');
      navigate(PROFILE);
    }
  }, [isError, isSuccess]);

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
    <>
      {/*<Preloader />*/}
      {isLoading ? (
        <Preloader />
      ) : (
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
                minLength: { message: 'Password should be more then 4 char', value: 4 },
              }}
            />
            <Controller
              render={({ field }) => (
                <StyledCheckbox onChange={field.onChange} checked={field.value}>
                  Remember me
                </StyledCheckbox>
              )}
              name="checkbox"
              control={control}
              defaultValue={false}
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
      )}
      {errors.email && <span>{errors.email?.message}</span>}
      {errors.password && <span>{errors.password?.message}</span>}
    </>
  );
};

export default Login;
