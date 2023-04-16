import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'global-style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <GlobalStyle />
        <App />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
);
