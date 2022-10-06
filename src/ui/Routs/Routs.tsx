import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'ui/Pages/Login/Login';
import Registration from 'ui/Pages/Registration/Registration';
import ForgotPassword from 'ui/Pages/ForgotPassword/ForgotPassword';
import {BOOK, FORGOT_PASSWORD, HOME, LOGIN, REGISTRATION, SEARCH} from 'utils/constants/RoutesPathConstants';
import Home from 'ui/Pages/Home/Home';
import Error404 from 'ui/Pages/Error404/Error404';
import BookPage from '../Pages/BookPage/BookPage';
import {Search} from "../Pages/Search/Search";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={HOME} />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={BOOK} element={<BookPage />} />
      <Route path={HOME} element={<Home />} />
      <Route path={SEARCH} element={<Search />} />
      <Route path={REGISTRATION} element={<Registration />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default Routs;
