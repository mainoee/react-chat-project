import React from 'react';

const MessageForm = ({ content, onCreateMessage, onChangeContent }) => (
  <form onSubmit={onCreateMessage} className="message-form">
    <input
      type="text"
      value={content}
      onChange={onChangeContent}
    />
    <button type="submit">Send</button>
  </form>
)


export default MessageForm;
