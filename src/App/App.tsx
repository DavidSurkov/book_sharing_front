import React, { useEffect } from 'react';
import { useAuthoriseQuery } from '../dal/auth/authAPI';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../utils/constants/RoutesPathConstants';
import Header from '../ui/components/Header/Header';
import Routs from '../ui/Routs/Routs';
import { signInUser } from '../bll/user-slice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorised = useAppSelector((state) => state.user.isAuthorised);
  const { isError, isSuccess, data: response } = useAuthoriseQuery();

  useEffect(() => {
    if (!isAuthorised && isError) {
      navigate(LOGIN);
    }
  }, [isAuthorised, isError]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(signInUser(response));
    }
  }, [isSuccess]);
  return (
    <>
      {isAuthorised && <Header />}
      <Routs />
    </>
  );
};

export default App;
