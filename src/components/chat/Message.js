import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';

const Message = (props) => {
  const { message } = props;
  const date = new Date(message.createdAt);

  return (
    <div className="message-content">
      <i>{message.username}</i><small>
        <FormattedDate value={date} /> - <FormattedTime value={date} />
      </small>
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
