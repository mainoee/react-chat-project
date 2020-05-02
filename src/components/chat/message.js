import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { message } = this.props;
    const date = new Date(message.createdAt).toLocaleTimeString();
    return (
      <div>
        <span>{message.userId}</span><p>{date}</p>
        <p>{message.content}</p>
      </div>
    )
  }
}

export default Message;
