import React, { Component } from 'react';

class Channel extends Component {
  handleClick = () => {
    this.props.onClickChannel(this.props.channel);
  }

  render() {
    const { channel, selectedChannel } = this.props;
    return (
      <p className={channel === selectedChannel ? 'active' : null }
         onClick={this.handleClick}>
          #{channel}
      </p>
    )
  }
}

export default Channel;
