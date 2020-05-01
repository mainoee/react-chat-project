import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './home';
import Chat from './chat/chat';
import Login from './authentication/login';
import Signup from './authentication/signup';
import PrivateRoute from './authentication/privateRoute';
import Navigation from './Navigation';

import { withAuthentication } from './Session';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ["Politics", "Economics", "World"],
      messages: [
        {
          time: new Date().toLocaleTimeString(),
          username: 'mainoee',
          content: 'Welcome to the chat!'
        },
        {
          time: new Date().toLocaleTimeString(),
          username: 'jcameron',
          content: 'Hi there!'
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/chat"
              render={(props) => <Chat {...props}
                                       channels={this.state.channels}
                                       messages={this.state.messages} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuthentication(App);

