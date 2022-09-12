import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { emailRegExp } from '../../../utils/regExp';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Button, Input, notification, Space } from 'antd';
import { LOGIN } from '../../../utils/RoutesPathConstants';
import { useSignUpMutation } from '../../../dal/auth/authAPI';

type RegistrationTypes = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

type NotificationType = 'success' | 'error';

const StyledRegisterForm = styled.div`
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

const StyledButton = styled(Button)`
  width: 200px;
  margin: 8px 0;
`;

const StyledInputPassword = styled(Input.Password)`
  width: 200px;
`;

const Registration: FC = () => {
  const [signUp, { data, error, isLoading, isSuccess, isError }] = useSignUpMutation();

  const openRegisterNotification = (type: NotificationType, error?: any) => {
    notification[type]({
      message: `${type === 'success' ? 'Success' : 'Error'}`,
      description: `${type === 'success' ? '' : error.data.message}`,
    });
  };

  useEffect(() => {
    if (isError) {
      openRegisterNotification('error', error);
    }
    if (isSuccess) {
      openRegisterNotification('success');
    }
  }, [isError, isSuccess]);

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledRegisterForm>
          <Controller
            render={({ field }) => (
              <StyledInput
                {...field}
                placeholder="User name"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            )}
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: { message: 'Name is required', value: true },
            }}
          />

          <Controller
            render={({ field }) => <StyledInput {...field} type="email" placeholder="Email" />}
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: { message: 'Email is required', value: true },
              pattern: { message: 'Email is not correct', value: emailRegExp },
            }}
          />

          <Space direction="vertical">
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

          {/*<StyledButton>Sign up</StyledButton>*/}
          <input type="submit" />
          <div>
            <span>Already have an account?</span>
            <NavLink to={LOGIN}>Login</NavLink>
          </div>
        </StyledRegisterForm>
      </form>
      {errors.email && <span>{errors.email?.message}</span>}
      {errors.password && <span>{errors.password?.message}</span>}
      {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}
    </>
  );
};

export default Registration;
