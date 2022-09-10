import React from 'react';
import Routs from '../../Routs/Routs';
import Header from '../Header/Header';
import { HashRouter } from 'react-router-dom';

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
