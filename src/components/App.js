import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Chat from './chat/Chat';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Navigation from './Navigation';

import { withAuthentication } from './session';

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

