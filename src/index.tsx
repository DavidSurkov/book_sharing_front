import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter } from 'react-router-dom';
import './utils/fonts/JosefinSans/JosefinSans-VariableFont_wght.ttf';
import './utils/fonts/JosefinSans/JosefinSans-Italic-VariableFont_wght.ttf';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
