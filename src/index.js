import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/chat.css';
import './assets/stylesheets/authentication.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/app';
import Firebase, { FirebaseContext } from './service';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
