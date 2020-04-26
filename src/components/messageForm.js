import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <form className="message-form">
        <input
          type="text"
          autoComplete="off"
          value={this.state.value}
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}


export default MessageForm;
