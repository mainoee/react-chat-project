import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../../service';

import { AuthUserContext, withAuthorization } from '../Session';

import MessagesList from './messagesList';
import MessageForm from './messageForm';
// import Channels from './channels';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messages: [],
      content: '',
    };
  }

  componentDidMount = () => {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.props.firebase.messages().on('value', snapshot => {
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
  try {
    this.props.firebase.messages().push({
      content: this.state.content,
      userId: authUser.uid,
    });
    this.setState({ content: '' });
    event.preventDefault();
    } catch(error) {
   console.log(error)
  }
  };

  render() {
    const { messages, loading, content } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="messaging-wrapper">
            {loading && <div>Loading...</div>}
            {messages ? (
              <MessagesList messages={messages} />
            ) : (
              <div>
                <MessageForm
                  authUser={authUser}
                  content={content}
                  onChangeContent={this.onChangeContent}
                  onCreateMessage={this.onCreateMessage}
                />
                <div>There are no messages ...</div>
              </div>
            )}
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
