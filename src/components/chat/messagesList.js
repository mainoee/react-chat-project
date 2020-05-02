import React from 'react';
import Message from './message';

const MessagesList = ({ messages }) => (
  <div className="channel-content">
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
