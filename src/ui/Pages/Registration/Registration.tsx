import React, { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { emailRegExp } from '../../../utils/constants/regExp';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, notification, Space } from 'antd';
import { LOGIN } from '../../../utils/constants/RoutesPathConstants';
import { useSignUpMutation } from '../../../dal/auth/authAPI';
import { NavLink, useNavigate } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import {
  StyledButton,
  StyledErrorSpanConfirmPass,
  StyledErrorSpanEmail,
  StyledErrorSpanPass,
  StyledInput,
  StyledInputPassword,
  StyledRegisterForm,
  StyledRegistrationContainer,
  StyledUserOutlined,
} from './Registration.styles';

type RegistrationTypes = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

type NotificationType = 'success' | 'error';

const Registration: FC = () => {
  const navigate = useNavigate();
  const [signUp, { data, error, isLoading, isSuccess, isError }] = useSignUpMutation();

  const openRegisterNotification = (type: NotificationType, error?: any) => {
    notification[type]({
      message: `${type === 'success' ? 'Success' : 'Error'}`,
      description: `${type === 'success' ? '' : error.data?.message}`,
    });
  };

  useEffect(() => {
    if (isError) {
      openRegisterNotification('error', error);
    }
    if (isSuccess) {
      openRegisterNotification('success');
      navigate(LOGIN);
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
    <StyledRegistrationContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledRegisterForm>
          <Controller
            render={({ field }) => <StyledInput {...field} placeholder="User name" prefix={<StyledUserOutlined />} />}
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
          <Form.Item>
            <StyledButton htmlType="submit">Sign up</StyledButton>
          </Form.Item>
          <div>
            <span>Already have an account?</span>
            <NavLink to={LOGIN}>Login</NavLink>
          </div>
        </StyledRegisterForm>
      </form>
      {errors.email && <StyledErrorSpanEmail>{errors.email?.message}</StyledErrorSpanEmail>}
      {errors.password && <StyledErrorSpanPass>{errors.password?.message}</StyledErrorSpanPass>}
      {errors.confirmPassword && (
        <StyledErrorSpanConfirmPass>{errors.confirmPassword?.message}</StyledErrorSpanConfirmPass>
      )}
      {isLoading && <Preloader />}
    </StyledRegistrationContainer>
  );
};

export default Registration;
