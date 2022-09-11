import { FC } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { emailRegExp } from '../../../utils/regExp';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { LOGIN } from '../../../utils/RoutesPathConstants';

type RegistrationTypes = {
  email: string;
  password: string;
  confirmPassword: string;
};

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Registration: FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationTypes>();
  const onSubmit = (data: RegistrationTypes) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledForm>
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
