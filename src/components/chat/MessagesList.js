import React from 'react';
import Message from './Message';

const MessagesList = ({ messages, authUser }) => (
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
