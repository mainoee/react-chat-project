import React from 'react';

const Message = (props) => {
  return (
    <div className="message-container">
      <i>
        <span>{props.message.username}</span>
        <small>{props.message.time}</small>
        <p>{props.message.content}</p>
      </i>
    </div>
  );
};


export default Message;

