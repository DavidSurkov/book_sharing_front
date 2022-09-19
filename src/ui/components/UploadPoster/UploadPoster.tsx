import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const StyledInputFile = styled.input`
  visibility: hidden;
`;

type UploadFilePropsType = {
  title: string;
};

const UploadPoster = React.forwardRef<HTMLInputElement, UploadFilePropsType>(({ title }, ref) => {
  const [newImage, setNewImage] = useState<string>();

  const inputRef = useRef<HTMLInputElement>(null);

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click();
  };

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      console.log('file: ', file);
      if (file) {
        formData.append('file', file);
      }
      if (file.size < 5000000) {
        convertToBase64(file, (file64: string) => {
          setNewImage(file64);
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
      <Button ref={ref} style={{ width: '150px' }} onClick={selectFileHandler} icon={<UploadOutlined />}>
        {title}
      </Button>
      {newImage && (
        <img
          style={{ height: '100px', width: '100px', margin: '10px', border: '1px solid gray' }}
          src={newImage}
          alt="img"
        />
      )}
      <StyledInputFile ref={inputRef} type="file" accept=".jpg, .jpeg, .png" onChange={uploadHandler} />
    </>
  );
});

export default UploadPoster;
