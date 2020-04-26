import React, { Component } from 'react';
import MessageForm from './messageForm';
import Message from './message';


class MessagesList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.messages.map((message, index) => {
            return (
              <Message key={index} message={message} />
            )
          })
          }
        </div>
        <MessageForm />
      </div>
    )
  }
}

export default MessagesList;
