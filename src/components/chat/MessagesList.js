import React from 'react';
import Message from './Message';

const MessagesList = ({ messages }) => (
  <div className="message-list">
    {messages.map(message => (
      <Message
        key={message.uid}
        message={message}
      />
    ))
    }
  </div>
);

export default MessagesList;
