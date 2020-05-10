import React from 'react';

const Message = (props) => {
  const { message } = props;
  const time = new Date(message.createdAt).toLocaleTimeString();
  const date = new Date(message.createdAt).toLocaleDateString();

  return (
    <div className="message-content">
      <i>{message.username}</i><small>{date} - {time}</small>
      {message.content ? (
        <p className="thread-content">{message.content}</p>
      ) : (
        <br />
      )}
      {message.gif ? (
        <img src={message.gif} alt="gif" height="80" width="80" />
      ) : (
        ""
      )}
    </div>
  )
}

export default Message;
