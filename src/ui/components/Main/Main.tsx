import React from 'react';
import Header from '../Header/Header';
import { HashRouter } from 'react-router-dom';
import Routs from '../../Routs/Routs';

const Main = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routs />
      </HashRouter>
    </div>
  );
};

export default Main;
