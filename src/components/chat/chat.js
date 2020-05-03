import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../../service';

import { AuthUserContext, withAuthorization } from '../Session';

import MessagesList from './messagesList';
import MessageForm from './messageForm';
import Channels from './channels';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messages: [],
      content: '',
      channels: ["Politics", "Economics", "World"],
      selectedChannel: 'Politics',
    };
  }

  componentDidMount = () => {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    const channel = this.state.selectedChannel;
    this.props.firebase.channels(channel).on('value', snapshot => {
      const messageObject = snapshot.val();

      if (messageObject) {
        const messagesList = Object.keys(messageObject).map(key => ({
          ...messageObject[key],
          uid: key,
        }));

        this.setState({
          messages: messagesList,
          loading: false
        });
      } else {
        this.setState({ messages: null, loading: false });
      }
    });
  }

  componentWillUnmount = () => {
    this.props.firebase.messages().off();
  }

  onChangeContent = event => {
    this.setState({ content: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    const channel = this.state.selectedChannel;
    this.props.firebase.channels(channel).push({
        content: this.state.content,
        userId: authUser.uid,
        createdAt: this.props.firebase.serverValue.TIMESTAMP,
      });

    this.setState({ content: '' });

    event.preventDefault();
  };

  onClickChannel = (selectedChannel) => {
    this.setState({ selectedChannel: selectedChannel })
  }

  render() {
    const { messages, loading, content, channels, selectedChannel } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="messaging-wrapper">
            {loading && <div>Loading...</div>}
            <Channels
              channels={channels}
              selectedChannel={selectedChannel}
              onClickChannel={this.onClickChannel}
            />
            <div className="message-container">
              {messages ? (
                <MessagesList messages={messages} />
              ) : (
                <div>There are no messages...</div>
              )}
              <MessageForm
                authUser={authUser}
                content={content}
                onChangeContent={this.onChangeContent}
                onCreateMessage={this.onCreateMessage}
              />
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(Chat);
