import React, { Component } from 'react';
import Channels from './channels';
import MessagesList from './messagesList';
import MessageForm from './messageForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ["Politics", "Economics", "World"],
    };
  }

  render() {
    return (
      <div className="messaging-wrapper">
        <Channels channels={this.state.channels}/>
        <MessagesList />
        <MessageForm />
      </div>
    );
  }
}

export default App;
