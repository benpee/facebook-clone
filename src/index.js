import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/auth-context';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider initialState={initialState} reducer={reducer}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
