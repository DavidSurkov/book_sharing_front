import React from 'react';
import { useGetAllBooksQuery } from 'dal/book/bookAPI';
import { SearchDrawer } from '../../components/SearchDrawer/SearchDrawer';
import { useToggle } from '../../../utils/hooks/use-toggle.hook';
import { Container } from './Search.styles';

export const Search = () => {
  const { data, error } = useGetAllBooksQuery();
  const { modal: drawer, toggleModal: toggleDrawer } = useToggle(true);
  return (
    <Container>
      <div>Search</div>
      <SearchDrawer isOpen={drawer} onClose={toggleDrawer} />
    </Container>
  );
};
