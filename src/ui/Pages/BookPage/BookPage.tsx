import React from 'react';
import { useParams } from 'react-router-dom';
import { useDeleteBookMutation, useGetOneBookQuery } from 'services/book/bookAPI';
import { useAppSelector } from 'services/hooks/hooks';
import {
  BookInfo,
  BookInfoContainer,
  BookInfoItem,
  BookPoster,
  DeleteButton,
  DescriptionSector,
  InfoWrapper,
} from './BookPage.styles';
import { useNotificationAndNavigate } from 'utils/hooks/use-notification-and-navigate.hook';
import { HOME } from 'utils/constants/RoutesPathConstants';

const BookPage = () => {
  const { id } = useParams<string>();
  const { data } = useGetOneBookQuery(id);
  const [deleteBook, { isSuccess, isError, error }] = useDeleteBookMutation();
  const userId = useAppSelector((state) => state.user.id);

  useNotificationAndNavigate(isSuccess, isError, error, 'Book has been deleted', HOME);

  const deleteBookHandler = () => {
    deleteBook(data?.id);
  };

  return (
    <BookInfoContainer>
      <BookInfoItem>
        <InfoWrapper>
          {data && data.poster.url && <BookPoster src={data && data.poster.url} alt="Book poster" />}
          <BookInfo>Book title: {data && data.title}</BookInfo>
          <BookInfo>Author: {data && data.author}</BookInfo>
          <BookInfo>Year: {data && data.year}</BookInfo>
          <DescriptionSector>
            <BookInfo>{data && data.description}</BookInfo>
          </DescriptionSector>
          <DeleteButton disabled={userId !== data?.user.id} onClick={deleteBookHandler}>
            Delete book
          </DeleteButton>
        </InfoWrapper>
      </BookInfoItem>
    </BookInfoContainer>
  );
};

export default BookPage;
