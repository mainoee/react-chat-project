import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from "react-intl";

import './assets/stylesheets/index.css';
import './assets/stylesheets/navbar.css';
import './assets/stylesheets/chat.css';
import './assets/stylesheets/authentication.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Firebase, { FirebaseContext } from './service';

ReactDOM.render(
  <IntlProvider>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </IntlProvider>,
  document.getElementById('root')
);
