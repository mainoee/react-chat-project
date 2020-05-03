import React, { Component } from 'react';

class Channel extends Component {
  handleClick = () => {
    this.props.onClickChannel(this.props.channel);
  }

  render() {
    const { channel } = this.props;
    return (
      <p className={channel === this.props.selectedChannel ? 'active' : null }
         onClick={this.handleClick}>
          {channel}
      </p>
    )
  }
}

export default Channel;
