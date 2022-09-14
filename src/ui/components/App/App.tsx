import React, { useEffect } from 'react';
import Main from '../Main/Main';
import { useAuthoriseQuery } from '../../../dal/auth/authAPI';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../utils/RoutesPathConstants';

const App = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isError } = useAuthoriseQuery();

  useEffect(() => {
    if (isError) {
      navigate(LOGIN);
    }
  }, [isError]);
  return <Main />;
};

export default App;
