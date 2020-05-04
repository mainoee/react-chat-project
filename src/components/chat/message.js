import React, { Component } from 'react';

import { withFirebase } from '../../service';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    const authUser = this.props.message.userId

    this.props.firebase.user(authUser).on('value', snapshot => {
      const user = snapshot.val();

      if (user) {
        this.setState({ username: user.username });
      } else {
        this.setState({ username: '' });
      }
    });
  }

  render() {
    const { message } = this.props;
    const time = new Date(message.createdAt).toLocaleTimeString();
    const date = new Date(message.createdAt).toLocaleDateString();

    return (
      <div className="message-content">
        <i>{this.state.username}</i><small>{date} - {time}</small>
        <p>{message.content}</p>
        {message.gif ? (
          <img src={message.gif} alt="gif" height="80" width="80" />
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default withFirebase(Message);
