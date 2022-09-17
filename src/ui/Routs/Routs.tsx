import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'ui/components/Login/Login';
import Registration from 'ui/components/Registration/Registration';
import ForgotPassword from 'ui/components/ForgotPassword/ForgotPassword';
import { FORGOT_PASSWORD, HOME, LOGIN, REGISTRATION } from 'utils/RoutesPathConstants';
import Home from 'ui/components/Home/Home';
import Error404 from 'ui/components/Error404/Error404';

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
