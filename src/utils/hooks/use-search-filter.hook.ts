import { useAppDispatch, useAppSelector } from 'dal/hooks/hooks';
import { ChangeEvent } from 'react';
import { setAuthor, setGenre, setTitle, setYear } from 'bll/filter-slice';
import { RadioChangeEvent } from 'antd';

export const useSearchFilterHook = () => {
  const dispatch = useAppDispatch();
  const { title, author, year, genre } = useAppSelector((state) => state.filter);

  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.currentTarget.value));
  };

  const setAuthorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthor(e.currentTarget.value));
  };

  const setYearHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof e.currentTarget.value === 'number') {
      dispatch(setYear(e.currentTarget.value));
    }
  };

  const setGenreHandler = (e: RadioChangeEvent) => {
    dispatch(setGenre(e.target.value));
  };

  return { title, author, year, genre, setGenreHandler, setAuthorHandler, setTitleHandler, setYearHandler };
};
