import React from 'react';
import MessageForm from './messageForm';
import Message from './message';

const MessagesList = ({ messages, content, onChangeContent, onCreateMessage }) => (
  <div className="channel-content">
    {messages.map(message => (
      <Message
        key={message.uid}
        message={message}
      />
    ))
    }
    <MessageForm
      content={content}
      onChangeContent={onChangeContent}
      onCreateMessage={onCreateMessage}
    />
  </div>
);

export default MessagesList;
