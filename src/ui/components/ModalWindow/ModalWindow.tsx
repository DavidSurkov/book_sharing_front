import { Button, Input, Modal, notification, Select } from 'antd';
import React, { ChangeEventHandler, FC, useRef, useState } from 'react';
import { useAllGenreQuery } from '../../../dal/book/bookAPI';
import { useToggle } from '../../../utils/hooks/use-toggle.hook';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
import { bookTypes, posterTypes } from '../../../utils/constants/fileTypes';

const StyledGenreDateWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledUploadWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: 100%;
  //background-color: gray;
`;

const StyledUploadFileWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  //background-color: gray;
  align-items: center;
`;

const StyledUploadPosterWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  //background-color: gray;
  align-items: center;
`;

type GenreType = {
  id: number;
  name: string;
};

type AddBookFormType = {
  title: string;
  author: string;
  genre: GenreType[];
  year: Date;
  description: string;
  poster: Blob;
  book: Blob;
};

const ModalWindow: FC = () => {
  const { modal, toggleModal } = useToggle();
  const [bookFile, setBookFile] = useState<File | null>();
  const [posterFile, setPosterFile] = useState<File | null>();

  const onChangeBookHandler: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.files && target.files[0]) {
      const book = target.files[0];
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
  const onChangePosterHandler: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.files && target.files[0]) {
      const poster = target.files[0];
      if (poster.size > 5e6) {
        notification.error({ message: 'File is more then 5mb' });
        return;
      }
      if (!Object.values(posterTypes).includes(poster.type)) {
        debugger;
        notification.error({ message: 'Wrong poster format' });
        return;
      }
      setPosterFile(poster);
    }
  };

  const { data } = useAllGenreQuery();

  const { TextArea } = Input;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBookFormType>();
  const onSubmit = (data: AddBookFormType) => {
    console.log({ ...data, bookFile, posterFile });
  };

  const onOkHandler = () => {
    toggleModal();
  };

  const inputBookRef = useRef<HTMLInputElement>(null);
  const inputPosterRef = useRef<HTMLInputElement>(null);

  const selectBookHandler = () => {
    inputBookRef && inputBookRef.current?.click();
  };

  const selectPosterHandler = () => {
    inputPosterRef && inputPosterRef.current?.click();
  };

  return (
    <>
      <Button type="primary" onClick={toggleModal}>
        Add new book
      </Button>
      <Modal title="Add new book" centered open={modal} onOk={onOkHandler} onCancel={toggleModal} width={500}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }) => <Input required placeholder="Book title" {...field} style={{ width: '100%' }} />}
            name="title"
            control={control}
            defaultValue=""
            rules={{
              required: { message: 'Title is required', value: true },
            }}
          />

          <Controller
            render={({ field }) => <Input required placeholder="Author" {...field} style={{ width: '100%' }} />}
            name="author"
            control={control}
            defaultValue=""
            rules={{
              required: { message: 'Author is required', value: true },
            }}
          />

          <StyledGenreDateWrapper>
            <Controller
              render={({ field }) => (
                <Select style={{ width: '220px' }} {...field} placeholder={'Genre'}>
                  {data &&
                    data.map((i) => (
                      <Select.Option key={i.id} value={i.name}>
                        {i.name}
                      </Select.Option>
                    ))}
                </Select>
              )}
              name="genre"
              control={control}
              // defaultValue=""
              rules={{
                required: { message: 'Genre is required', value: true },
              }}
            />
            <input
              type="date"
              {...register('year', {
                required: true,
              })}
            />
          </StyledGenreDateWrapper>
          <Controller
            render={({ field }) => (
              <TextArea
                required
                {...field}
                placeholder={'Description'}
                style={{ width: '100%', resize: 'none' }}
                showCount
                maxLength={250}
                rows={3}
              />
            )}
            name={'description'}
            control={control}
          />

          <StyledUploadWrapper>
            <StyledUploadFileWrapper>
              <Button style={{ width: '150px' }} onClick={selectBookHandler} icon={<UploadOutlined />}>
                Upload book
                <input ref={inputBookRef} hidden onChange={onChangeBookHandler} type="file" />
              </Button>
            </StyledUploadFileWrapper>

            <StyledUploadPosterWrapper>
              <Button style={{ width: '150px' }} onClick={selectPosterHandler} icon={<UploadOutlined />}>
                Upload poster
                <input ref={inputPosterRef} onChange={onChangePosterHandler} hidden type="file" />
              </Button>
            </StyledUploadPosterWrapper>
          </StyledUploadWrapper>
          <Button htmlType="submit">Sign in</Button>
        </form>
      </Modal>
    </>
  );
};

export default ModalWindow;
