import React, { Component } from 'react';

const FAKE_DATA = [
  {
    username: 'mainoee',
    text: 'Welcome to the chat!'
  },
  {
    username: 'jcameron',
    text: 'Hi there!'
  },
]

class MessagesList extends Component {
  render() {
    return (
      <div>
        {FAKE_DATA.map((message, index) => {
          return (
            <div key={index}>
              {message.username}: {message.text}
            </div>
          )
        })}
      </div>
    )
  }
}


export default MessagesList;
