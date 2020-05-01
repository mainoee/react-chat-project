import React from 'react';
import MessageForm from './messageForm';
import Message from './message';

const MessagesList = ({ messages, content }) => (
  <div className="channel-content">
    {messages.map(message => (
      <Message key={message.uid} message={message} />
    ))
    }
    <MessageForm content={content} />
  </div>
);

export default MessagesList;
