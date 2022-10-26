import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  justify-content: flex-end;
  padding: 15px;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  width: 56%;
  height: 34px;
`;

export const StyledImage = styled.img`
  width: 35px;

  &:hover {
    transform: scale(0.95);
  }
`;

// export const StyledSearchingInput = styled(Input)`
//   transition: width 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53);
//   border-radius: 50px;
//   height: 32px;
//   outline: none;
//   padding: 0 40px 0 16px;
//   position: relative;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   background-color: rgb(255, 255, 255);
//   width: 27%;
//   &:hover,
//   &:enabled {
//     border: none;
//   }
// `;

export const StyledSearchingIcon = styled(SearchOutlined)`
  color: #231d4f;
  font-size: 18px;
  top: 7px;
  right: 32px;
  position: relative;

  &:hover {
    color: #bb6bd9;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const LogoutIcon = styled.img`
  width: 25px;
  margin: 0 10px;
  filter: brightness(0) saturate(100%) invert(11%) sepia(29%) saturate(3540%) hue-rotate(228deg) brightness(94%)
    contrast(97%);

  &:hover {
    filter: brightness(0) saturate(100%) invert(76%) sepia(66%) saturate(5297%) hue-rotate(235deg) brightness(90%)
      contrast(88%);
  }

  &:active {
    transform: scale(0.95);
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
  display: flex;
  flex-direction: column;
  padding: 7px;
  color: #231d4f;
  font-weight: bold;
  //border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 25px;
`;

export const StyledParagraph = styled.span`
  font-size: 18px;
  margin: 0;
  line-height: normal;
`;
