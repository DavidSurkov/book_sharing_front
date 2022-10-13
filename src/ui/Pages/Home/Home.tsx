import React from 'react';
import { useGetAllBooksQuery } from '../../../dal/book/bookAPI';
import BookItem from '../../components/BookItem/BookItem';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'dal/hooks/hooks';
import { Container } from './Home.styles';
import { SearchDrawer } from 'ui/components/SearchDrawer/SearchDrawer';
import { useToggleDrawer } from '../../../utils/hooks/use-toggle-drawer.hook';

const Home = () => {
  const isAuthorised = useAppSelector((state) => state.user.isAuthorised);

  const { author, genre, title, year } = useAppSelector((state) => state.filter);

  const filterOptions = { author, genre, title, year };

  const queryString = Object.entries(filterOptions)
    .map(([key, value]) => {
      if (value) {
        return `${key}=${value}&`;
      }
    })
    .join('')
    .slice(0, -1);

  const { data, refetch } = useGetAllBooksQuery(queryString, { skip: !isAuthorised });
  const { drawer, toggleDrawer } = useToggleDrawer();
  const navigate = useNavigate();

  const onClickHandler = (id: number) => {
    navigate(`/book/${id}`);
  };

  return (
    <Container>
      <SearchDrawer
        isOpen={drawer}
        onClose={toggleDrawer}
        onSubmit={() => {
          refetch();
        }}
      />
      {data?.length &&
        data.map((book, index) => {
          return <BookItem onClick={onClickHandler} {...book} key={index} posterUrl={book.poster.url} />;
        })}
    </Container>
  );
};

export default Home;
