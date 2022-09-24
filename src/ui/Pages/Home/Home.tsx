import React from 'react';
import { useGetAllBooksQuery } from '../../../dal/book/bookAPI';
import styled from 'styled-components';
import BookItem from '../../components/BookItem/BookItem';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: gray;
`;

const Home = () => {
  const { data, error } = useGetAllBooksQuery();
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
