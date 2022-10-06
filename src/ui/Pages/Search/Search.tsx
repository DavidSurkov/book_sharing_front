import React from 'react';
import styled from 'styled-components';
import { useGetAllBooksQuery } from 'dal/book/bookAPI';
import { SearchDrawer } from '../../components/SearchDrawer/SearchDrawer';
import { useToggle } from '../../../utils/hooks/use-toggle.hook';

const Container = styled.div`
  padding: 10px;
`;
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
