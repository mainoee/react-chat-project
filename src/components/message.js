import React from 'react';

const Message = (props) => {
  return (
    <div>
      <div className="">{props.message.username}: {props.message.time}</div>
      <div className="">{props.message.content}</div>
    </div>
  );
};


export default Message;

