import React, { useEffect } from 'react';
import Header from 'ui/components/Header/Header';
import Routs from 'ui/Routs/Routs';
import { useAppSelector } from 'dal/hooks/hooks';
import { useAuthoriseQuery } from 'dal/auth/authAPI';
import { LOGIN } from 'utils/constants/RoutesPathConstants';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const isAuthorised = useAppSelector((state) => state.user.isAuthorised);

  const { isError } = useAuthoriseQuery();

  useEffect(() => {
    if (!isAuthorised && isError) {
      navigate(LOGIN);
    }
  }, [isError, isAuthorised]);

  return (
    <>
      {isAuthorised && <Header />}
      <Routs />
    </>
  );
};

export default App;
