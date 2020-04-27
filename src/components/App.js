import React, { Component } from 'react';
import Chat from './chat';

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
        <Chat channels={this.state.channels} messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
