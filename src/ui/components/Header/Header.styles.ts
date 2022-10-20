import styled from 'styled-components';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const StyledHeader = styled.header`
  display: flex;
  position: sticky;
  height: 60px;
  justify-content: flex-end;
  padding: 15px;
  background-color: #020301;
`;

export const StyledSearchingInput = styled(Input)`
  transition: width 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  border-radius: 50px;
  height: 32px;
  outline: none;
  padding: 0 40px 0 16px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 27%;
  &:hover,
  &:enabled {
    border: none;
  }
`;

export const StyledSearchingIcon = styled(SearchOutlined)`
  color: #020301;
  font-size: 22px;
  top: 5px;
  right: 32px;
  position: relative;
  &:hover {
    color: #9391f2;
  }
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
  &:checked,
  &:focus,
  &:enabled,
  &:active {
    color: #020301;
    background-color: #90e95c;
  }
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
