import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    const { content, onCreateMessage, onChangeContent, authUser } = this.props;
    console.log(authUser)
    return (
      <form onSubmit={(event) => onCreateMessage(event, authUser)} className="message-form">
        <input
          type="text"
          value={content}
          onChange={onChangeContent}
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default MessageForm;
