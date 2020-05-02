import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './home';
import Chat from './chat/chat';
import Login from './authentication/login';
import Signup from './authentication/signup';
import Navigation from './Navigation';

import { withAuthentication } from './Session';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);

