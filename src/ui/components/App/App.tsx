import React, { useEffect } from 'react';
import { useAuthoriseQuery } from '../../../dal/auth/authAPI';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../utils/RoutesPathConstants';
import Header from '../Header/Header';
import Routs from '../../Routs/Routs';

const App = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isError } = useAuthoriseQuery();

  useEffect(() => {
    if (isError) {
      navigate(LOGIN);
    }
  }, [isError]);
  return (
    <div>
      <Header />
      <Routs />
    </div>
  );
};

export default App;
