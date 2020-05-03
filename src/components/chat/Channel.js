import React, { Component } from 'react';

class Channel extends Component {
  handleClick = () => {
    this.props.onClickChannel(this.props.channel);
  }

  render() {
    return (
      <p className="" href="#" onClick={this.handleClick}>{this.props.channel}</p>
    )
  }
}

export default Channel;
