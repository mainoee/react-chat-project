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
    const date = new Date(message.createdAt).toLocaleTimeString();
    return (
      <div>
        <span>{this.state.username}</span> <i>{date}</i>
        <p>{message.content}</p>
      </div>
    )
  }
}

export default withFirebase(Message);
