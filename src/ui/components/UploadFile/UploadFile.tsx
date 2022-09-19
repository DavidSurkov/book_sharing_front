import React, { ChangeEvent, useState } from 'react';

// const StyledInputFile = styled.input`
//   //visibility: hidden;
// `;

type UploadFilePropsType = {
  title: string;
};

const UploadFile = React.forwardRef<HTMLInputElement, UploadFilePropsType>(({ title }, ref) => {
  const [newFile, setNewFile] = useState<File>();

  // const inputRef = useRef<HTMLInputElement>(null);
  //
  // const selectFileHandler = () => {
  //   inputRef && inputRef.current?.click();
  // };

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      console.log(file);
      setNewFile(file);
    }
  };

  // const convertToBase64 = (file: File, callback: (value: string) => void) => {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const file64 = reader.result as string;
  //     callback(file64);
  //   };
  //   reader.readAsDataURL(file);
  // };

  return (
    <>
      {/*<Button style={{ width: '150px' }} onClick={selectFileHandler} icon={<UploadOutlined />}>*/}
      {/*  {title}*/}
      <input hidden ref={ref} type="file" accept={'.txt, .pdf, .fb2, .word, .epub'} />
      {/*</Button>*/}

      {newFile && <p>{newFile.name}</p>}
    </>
  );
});

export default UploadFile;
