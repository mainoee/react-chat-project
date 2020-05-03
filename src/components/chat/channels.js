import React from 'react';
import Channel from './Channel';

const Channels = ({ channels, onClickChannel }) => (
  <div className="channels-container">
    {channels.map((channel, index) => (
      <Channel
        key={index}
        channel={channel}
        onClickChannel={onClickChannel}
      />
    ))
    }
  </div>
);

export default Channels;
