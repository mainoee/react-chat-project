import React, { Component } from 'react';
import MessagesList from './messagesList';
import Channels from './channels';

import { AuthUserContext, withAuthorization } from '../Session';

class Chat extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="messaging-wrapper">
            <Channels channels={this.props.channels} />
            <MessagesList messages={this.props.messages} />
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chat);
