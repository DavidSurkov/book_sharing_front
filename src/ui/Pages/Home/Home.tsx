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
  const { data } = useGetAllBooksQuery(undefined, { skip: !isAuthorised });
  const { drawer, toggleDrawer } = useToggleDrawer();
  const navigate = useNavigate();

  const onClickHandler = (id: number) => {
    navigate(`/book/${id}`);
  };

  return (
    <Container>
      <SearchDrawer isOpen={drawer} onClose={toggleDrawer} />
      {data?.length &&
        data.map((book, index) => {
          return <BookItem onClick={onClickHandler} {...book} key={index} posterUrl={book.poster.url} />;
        })}
    </Container>
  );
};

export default Home;
