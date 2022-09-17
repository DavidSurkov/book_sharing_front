import React, { ChangeEvent, FC, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const StyledInputFile = styled.input`
  visibility: hidden;
`;

type UploadFilePropsType = {
  accept: string;
  title: string;
};

const UploadFile: FC<UploadFilePropsType> = ({ accept, title }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const selectFileHAndler = () => {
    inputRef && inputRef.current?.click();
  };

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      console.log('file: ', file);

      if (file.size < 4000000) {
        convertToBase64(file, (file64: string) => {
          console.log('file64: ', file64);
        });
      } else {
        console.error('Error: ', 'File is to big');
      }
    }
  };

  const convertToBase64 = (file: File, callback: (value: string) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const file64 = reader.result as string;
      callback(file64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Button style={{ width: '150px' }} onClick={selectFileHAndler} icon={<UploadOutlined />}>
        {title}
      </Button>
      <StyledInputFile ref={inputRef} type="file" accept={accept} onChange={uploadHandler} />
    </>
  );
};

export default UploadFile;
