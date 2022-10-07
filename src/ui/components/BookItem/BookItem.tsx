import React, { FC } from 'react';
import styled from 'styled-components';
import { IGenre } from 'dal/book/bookAPI';

const Block = styled.div`
  padding: 20px;
  border: 1px solid black;
  background-color: white;
`;

interface IBookItem {
  id: number;
  posterUrl: string;
  title: string;
  author: string;
  year: number;
  genres: IGenre[];
  description: string;
  onClick: (id: number) => void;
}

const BookItem: FC<IBookItem> = ({ onClick, id, title, description, author, posterUrl, year, genres }) => {
  return (
    <Block onClick={() => onClick(id)}>
      <div>{title}</div>
      <div>
        <img style={{ width: '200px', height: '200px' }} src={posterUrl} alt="poster" />
      </div>
      <div>{year}</div>
      <div>
        {genres.map((genre) => {
          return <p key={genre.id}>{genre.name}</p>;
        })}
      </div>
      <div>{author}</div>
      <div>{description}</div>
    </Block>
  );
};

export default BookItem;
