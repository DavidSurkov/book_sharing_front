import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { emailRegExp } from '../../../utils/regExp';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, notification, Space } from 'antd';
import { LOGIN } from '../../../utils/RoutesPathConstants';
import { useSignUpMutation } from '../../../dal/auth/authAPI';

type RegistrationTypes = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

type NotificationType = 'success' | 'error';

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Registration: FC = () => {
  const [signUp, { data, error, isLoading, isSuccess, isError }] = useSignUpMutation();

  const openNotificationWithIcon = (type: NotificationType, error?: any) => {
    notification[type]({
      message: `${type === 'success' ? 'Success' : 'Error'}`,
      description: `${type === 'success' ? '' : error.data.message}`,
    });
  };

  useEffect(() => {
    if (isError) {
      openNotificationWithIcon('error', error);
    }
    if (isSuccess) {
      openNotificationWithIcon('success');
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
        <StyledForm>
          <Controller
            render={({ field }) => <Input {...field} type="text" placeholder="Name" />}
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: { message: 'Name is required', value: true },
            }}
          />

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

          <Space direction="vertical">
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
                <Input.Password
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

          <input type="submit" />
          <div>
            <span>Already have an account?</span>
            <NavLink to={LOGIN}>Login</NavLink>
          </div>
        </StyledForm>
      </form>
      {errors.email && <span>{errors.email?.message}</span>}
      {errors.password && <span>{errors.password?.message}</span>}
      {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}
    </>
  );
};

export default Registration;
