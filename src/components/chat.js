import React, { Component } from 'react';
import MessagesList from './messagesList';
import Channels from './channels';

class Chat extends Component {
  render() {
    return (
      <div className="messaging-wrapper">
        <Channels channels={this.props.channels} />
        <MessagesList messages={this.props.messages} />
      </div>
    )
  }
}

export default Chat;
