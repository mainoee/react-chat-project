import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../../service';

import { AuthUserContext, withAuthorization } from '../session';

import MessagesList from './MessagesList';
import MessageForm from './MessageForm';
import Channels from './Channels';
import GifBox from './GifBox';
import Gif from './Gif';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messages: [],
      content: '',
      channels: ["Politics", "Economics", "World"],
      selectedChannel: 'Politics',
      selectedGif: '',
    };
  }

  componentDidMount = () => {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    const channel = this.state.selectedChannel;

    this.props.firebase
      .channels(channel)
      .orderByChild('createdAt')
      .on('value', snapshot => {
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedChannel !== this.state.selectedChannel) {
      this.onListenForMessages();
    }
  }

  componentWillUnmount = () => {
    const channel = this.state.selectedChannel;
    this.props.firebase.channels(channel).off();
  }

  onChangeContent = event => {
    this.setState({ content: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    const channel = this.state.selectedChannel;
    this.props.firebase.channels(channel).push({
      content: this.state.content,
      userId: authUser.uid,
      username: authUser.displayName,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
      gif: this.state.selectedGif
    });

    this.setState({ content: '', selectedGif: '' });

    event.preventDefault();
  };

  onClickChannel = (selectedChannel) => {
    this.setState({ selectedChannel: selectedChannel });
  }

  onSelectGif = (gifObject) => {
    const gif = gifObject.images.downsized.url
    this.setState({ selectedGif: gif })
  }

  render() {
    const {
      messages,
      loading,
      content,
      channels,
      selectedChannel,
      selectedGif } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="app-wrapper">
            <Channels
              channels={channels}
              selectedChannel={selectedChannel}
              onClickChannel={this.onClickChannel}
            />

            <div className="message-container">
              <div className="thread">
                {loading && <div>Loading...</div>}
                {messages ? (
                  <MessagesList messages={messages} />
                ) : (
                  <div>There are no messages yet!</div>
                )}
                <MessageForm
                  authUser={authUser}
                  content={content}
                  selectedGif={selectedGif}
                  onChangeContent={this.onChangeContent}
                  onCreateMessage={this.onCreateMessage}
                />
              </div>

              <div className="gif-list">
                <GifBox onSelectGif={this.onSelectGif} />
                <div className="selected-gif">
                  <Gif selectedGif={selectedGif} />
                </div>
              </div>

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
