import { useAppDispatch, useAppSelector } from 'services/hooks/hooks';
import { ChangeEvent } from 'react';
import { setAuthor, setGenre, setTitle, setYear } from 'store/filter-slice';
import { RadioChangeEvent } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HOME } from 'utils/constants/RoutesPathConstants';

export const useSearchFilterHook = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { title, author, year, genre } = useAppSelector((state) => state.filter);

  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.currentTarget.value));
    navigate(HOME);
  };

  const setAuthorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthor(e.currentTarget.value));
  };

  const setYearHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const regExp = new RegExp('^[0-9]*$');
    const value = e.currentTarget.value;
    regExp.test(value) && (await dispatch(setYear(+value)));
  };

  const setGenreHandler = (e: RadioChangeEvent) => {
    dispatch(setGenre(e.target.value));
  };

  return { title, author, year, genre, setGenreHandler, setAuthorHandler, setTitleHandler, setYearHandler };
};
