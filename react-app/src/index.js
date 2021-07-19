import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ModalProvider } from './context/Modal'
import './index.css';
import App from './App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
