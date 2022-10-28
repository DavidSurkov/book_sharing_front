import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../services/hooks/hooks';
import { useAuthoriseQuery } from '../../services/auth/authAPI';
import { useEffect } from 'react';
import { LOGIN } from '../constants/RoutesPathConstants';

export const useAuth = () => {
  const navigate = useNavigate();

  const isAuthorised = useAppSelector((state) => state.user.isAuthorised);

  const { isLoading } = useAuthoriseQuery();

  const isLoggedIn = isAuthorised && !isLoading;

  useEffect(() => {
    if (!isAuthorised && !isLoading) {
      navigate(LOGIN);
    }
  }, [isLoading, isAuthorised]);

  return { isLoggedIn };
};
