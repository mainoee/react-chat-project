import React from 'react';
import MessageForm from './messageForm';
import Message from './message';

const MessagesList = ({
  authUser,
  messages,
  content,
  onCreateMessage,
  onChangeContent
}) => (
  <div className="channel-content">
    {messages.map(message => (
      <Message
        key={message.uid}
        message={message}
      />
    ))
    }
    <MessageForm
      authUser={authUser}
      content={content}
      onCreateMessage={onCreateMessage}
      onChangeContent={onChangeContent}
    />
  </div>
);

export default MessagesList;
