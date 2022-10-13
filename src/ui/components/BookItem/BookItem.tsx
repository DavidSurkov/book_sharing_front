import React, { FC } from 'react';
import { IGenre } from 'dal/book/bookAPI';
import { Block, BookDescription, BookPoster } from './BookItem.styles';

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
        <BookPoster src={posterUrl} alt="Book poster" />
      </div>
      <div>{year}</div>
      <div>
        {genres.map((genre) => {
          return <p key={genre.id}>{genre.name}</p>;
        })}
      </div>
      <div>{author}</div>
      <BookDescription>{description}</BookDescription>
    </Block>
  );
};

export default BookItem;
