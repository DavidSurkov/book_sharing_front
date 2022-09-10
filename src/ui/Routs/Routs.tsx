import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import Profile from '../components/Profile/Profile';
import Main from '../components/Main/Main';
import Error404 from '../components/Error404/Error404';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';

export const PATH = {
  LOGIN: '/login',
  PROFILE: '/profile',
  REGISTRATION: '/registration',
  MAIN: '/main',
  FORGOT_PASSWORD: '/forgot_password',
};

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={PATH.MAIN} />} />
      <Route path={PATH.MAIN} element={<Main />} />
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={PATH.REGISTRATION} element={<Registration />} />
      <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default Routs;
