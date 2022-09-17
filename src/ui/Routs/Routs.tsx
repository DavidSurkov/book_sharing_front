import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { FORGOT_PASSWORD, HOME, LOGIN, REGISTRATION } from '../../utils/RoutesPathConstants';
import Home from '../components/Profile/Home';
import Error404 from '../components/Error404/Error404';

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={HOME} />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={HOME} element={<Home />} />
      <Route path={REGISTRATION} element={<Registration />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default Routs;
