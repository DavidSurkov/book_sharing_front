import React from 'react';
import { useGetAllBooksQuery } from '../../../dal/book/bookAPI';
import BookItem from '../../components/BookItem/BookItem';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import { Container } from './Home.styles';

const Home = () => {
  const isAuthorised = useAppSelector((state) => state.user.isAuthorised);
  const { data } = useGetAllBooksQuery(undefined, { skip: !isAuthorised });
  const navigate = useNavigate();

  const onClickHandler = (id: number) => {
    navigate(`/book/${id}`);
  };

  return (
    <Container>
      {data?.length &&
        data.map((book, index) => {
          return <BookItem onClick={onClickHandler} {...book} key={index} posterUrl={book.poster.url} />;
        })}
    </Container>
  );
};

export default Home;
