import React, { useEffect } from 'react';
import { useAuthoriseQuery } from '../../../dal/auth/authAPI';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../utils/RoutesPathConstants';
import Header from '../Header/Header';
import Routs from '../../Routs/Routs';

const App = () => {
  const navigate = useNavigate();
  const { isError, isSuccess } = useAuthoriseQuery();

  useEffect(() => {
    if (isError) {
      navigate(LOGIN);
    }
  }, [isError, isSuccess]);
  return (
    <div>
      {isSuccess && <Header />}
      <Routs />
    </div>
  );
};

export default App;
