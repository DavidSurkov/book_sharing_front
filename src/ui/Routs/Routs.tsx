import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import Profile from '../components/Profile/Profile';
import Main from '../components/Main/Main';
import Error404 from '../components/Error404/Error404';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { FORGOT_PASSWORD, LOGIN, MAIN, PROFILE, REGISTRATION } from '../../utils/RoutesPathConstants';

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={MAIN} />} />
      <Route path={MAIN} element={<Main />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={PROFILE} element={<Profile />} />
      <Route path={REGISTRATION} element={<Registration />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default Routs;
