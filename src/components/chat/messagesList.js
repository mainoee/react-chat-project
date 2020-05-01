import React from 'react';
import MessageForm from './messageForm';
import Message from './message';

const MessagesList = ({ messages }) => (
  <div className="channel-content">
    {messages.map(message => (
      <Message key={message.uid} message={message} />
    ))
    }
    <MessageForm />
  </div>
);

export default MessagesList;
