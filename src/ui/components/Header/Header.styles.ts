import styled from 'styled-components';
import { Button } from 'antd';

export const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  height: 60px;
  justify-content: flex-end;
  padding: 15px;
  background-color: #020301;
`;

export const SearchBlock = styled(Button)`
  color: white;
  text-decoration: none;
  height: 32px;
  background-color: #90e95c;
  margin: 0 10px;
  padding: 4px 15px;
  border: none;
  &:hover {
    background-color: #90e95c;
    color: #020301;
  }
`;

export const LogoutButton = styled(Button)`
  margin-left: 10px;
  background-color: #9391f2;
  color: white;
  border: none;

  &:hover {
    background-color: #9391f2;
    color: #020301;
  }
`;

export const ModalButton = styled.div`
  margin-right: 10px;
`;

export const UserInfoWrapper = styled.div`
  //background-color: gray;
  height: 32px;
  padding: 5px;
  color: white;
`;

export const StyledParagraph = styled.p`
  font-size: 15px;
`;
