import { useGetAllBooksQuery } from 'services/book/bookAPI';
import { useAppSelector } from 'services/hooks/hooks';

export const useQueryString = () => {
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
  return { data, refetch };
};
