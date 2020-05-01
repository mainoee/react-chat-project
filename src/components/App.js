import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './home';
import Chat from './chat/chat';
import Login from './authentication/login';
import Signup from './authentication/signup';
import PrivateRoute from './authentication/privateRoute';
import Navigation from './Navigation';

import { withFirebase } from '../service';
import { AuthUserContext } from './Session';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
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

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
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
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);

