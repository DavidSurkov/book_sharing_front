import React from 'react';
import BookItem from 'ui/components/BookItem/BookItem';
import { useNavigate } from 'react-router-dom';
import { Container, RoundGreen, RoundYellow } from './Home.styles';
import { SearchDrawer } from 'ui/components/SearchDrawer/SearchDrawer';
import { useToggleDrawer } from 'utils/hooks/use-toggle-drawer.hook';
import { useQueryString } from 'utils/hooks/use-query-string.hook';

const Home = () => {
  const { data, refetch } = useQueryString();
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
      <RoundGreen />
      {data?.length
        ? data.map((book, index) => {
            return <BookItem onClick={onClickHandler} {...book} key={index} posterUrl={book.poster.url} />;
          })
        : ''}
      <RoundYellow />
    </Container>
  );
};

export default Home;
