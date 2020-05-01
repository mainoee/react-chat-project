import React, { Component } from 'react';
import MessagesList from './messagesList';
// import Channels from './channels';

import { withFirebase } from '../../service';

import { AuthUserContext, withAuthorization } from '../Session';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.messages().on('value', snapshot => {
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  render() {
    const { messages, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="messaging-wrapper">
            {loading && <div>Loading ...</div>}
            <MessagesList messages={messages} />
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chat);
