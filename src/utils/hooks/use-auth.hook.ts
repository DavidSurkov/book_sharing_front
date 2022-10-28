import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../dal/hooks/hooks';
import { useAuthoriseQuery } from '../../dal/auth/authAPI';
import { useEffect } from 'react';
import { LOGIN } from '../constants/RoutesPathConstants';

export const useAuth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isAuthorised = useAppSelector((state) => state.user.isAuthorised);

  const { isLoading } = useAuthoriseQuery();

  useEffect(() => {
    if (!isAuthorised && !isLoading) {
      navigate(LOGIN);
    }
  }, [isLoading, isAuthorised, pathname]);

  return { isAuthorised };
};
