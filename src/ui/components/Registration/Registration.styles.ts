import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

export const StyledRegistrationContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRegisterForm = styled.div`
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

export const StyledInput = styled(Input)`
  max-width: 200px;
  margin-bottom: 8px;
`;

export const StyledButton = styled(Button)`
  width: 200px;
  margin: 8px 0;
  color: gray;
`;

export const StyledInputPassword = styled(Input.Password)`
  width: 200px;
`;

export const StyledUserOutlined = styled(UserOutlined)`
  color: gray;
`;

export const StyledErrorSpanEmail = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 75px;
  font-family: Arial, 'sans-serif';
  color: #ff5f5d;
  font-size: 20px;
`;

export const StyledErrorSpanPass = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px;
  font-family: Arial, 'sans-serif';
  color: #ff5f5d;
  font-size: 20px;
`;

export const StyledErrorSpanConfirmPass = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 25px;
  font-family: Arial, 'sans-serif';
  color: #ff5f5d;
  font-size: 20px;
`;
