import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Chat from './chat';
import Login from './login';

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
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact path="/chat"
            render={(props) => <Chat {...props}
                                     channels={this.state.channels}
                                     messages={this.state.messages} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
