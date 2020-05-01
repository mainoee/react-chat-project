import React, { Component } from 'react';
import MessagesList from './messagesList';
import Channels from './channels';

import { withAuthorization } from '../Session';

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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chat);
