import React, { FC } from 'react';
import { IGenre } from 'dal/book/bookAPI';
import { Block, BookAuthor, BookPoster, BookTitle, PosterWrapper, Year } from './BookItem.styles';

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
      <BookTitle>{title}</BookTitle>
      <PosterWrapper>
        <BookPoster src={posterUrl} alt="Book poster" />
      </PosterWrapper>
      <Year>{year}</Year>
      {/*<div>*/}
      {/*  {genres.map((genre) => {*/}
      {/*    return <p key={genre.id}>{genre.name}</p>;*/}
      {/*  })}*/}
      {/*</div>*/}
      <BookAuthor>
        <p>Written by:</p> {author}
      </BookAuthor>
      {/*<BookDescription>{description}</BookDescription>*/}
    </Block>
  );
};

export default BookItem;
