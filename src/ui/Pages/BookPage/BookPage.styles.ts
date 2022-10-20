import styled from 'styled-components';
import { Button } from 'antd';

export const BookInfoContainer = styled.div`
  max-width: 1200px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  padding: 70px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #025373;
  flex-direction: column;
`;

export const BookPoster = styled.img`
  width: 450px;
  margin: 15px auto;
`;

export const BookInfo = styled.span`
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

export const DeleteButton = styled(Button)`
  background-color: #f28705;
  color: white;
  border: none;
  margin-bottom: 15px;
  &:hover,
  &:active {
    background-color: #f2a285;
    color: white;
  }
`;

export const DescriptionSector = styled.div`
  width: 70%;
  background-color: #027353;
  border: 1px solid red;
  margin: 15px auto;
  padding: 10px;
`;

export const BookInfoItem = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
