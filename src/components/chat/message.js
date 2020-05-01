import React from 'react';

const Message = ({ message }) => (
  <div className="message-container">
    <i>
      <span>{message.userId}</span>
      <p>{message.text}</p>
    </i>
  </div>
);

export default Message;
