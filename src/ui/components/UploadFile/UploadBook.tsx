import { ChangeEventHandler, FC, useRef, useState } from 'react';
import { Button, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { bookTypes } from '../../../utils/constants/fileTypes';
import { StyledError } from 'ui/common-styles/common.styles';

type UploadBookPropsType = {
  setBookFile: (bookFile: File) => void;
  setBookError: (bookError: boolean) => void;
  isPropsError?: boolean;
};

const UploadBook: FC<UploadBookPropsType> = ({ setBookFile, setBookError, isPropsError = false }) => {
  const [newBook, setNewBook] = useState<File>();
  const inputBookRef = useRef<HTMLInputElement>(null);

  const selectBookHandler = () => {
    inputBookRef && inputBookRef.current?.click();
  };

  const onChangeBookHandler: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.files && target.files[0]) {
      const book = target.files[0];
      setBookError(false);
      if (book.size < 5e6) {
        setNewBook(book);
      }
      if (book.size > 5e6) {
        notification.error({ message: 'File is more then 5mb' });
        return;
      }
      if (!Object.values(bookTypes).includes(book.type)) {
        notification.error({ message: 'Wrong book format' });
        return;
      }
      setBookFile(book);
    }
  };

  return (
    <div>
      <Button style={{ width: '150px' }} onClick={selectBookHandler} icon={<UploadOutlined />}>
        Upload book
      </Button>
      <input
        ref={inputBookRef}
        hidden
        onChange={onChangeBookHandler}
        type="file"
        accept="application/pdf, application/epub+zip, application/fb2, application/msword, text/plain"
      />
      {newBook && <p>{newBook.name}</p>}
      {isPropsError && <StyledError>Book is required!</StyledError>}
    </div>
  );
};

export default UploadBook;
