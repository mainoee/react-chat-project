import React, { Component } from 'react';
import Channels from './channels';
import MessagesList from './messagesList';

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
      <div className="messaging-wrapper">
        <Channels channels={this.state.channels}/>
        <MessagesList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
