import React from 'react';
import Channel from './Channel';

const Channels = ({ channels, selectedChannel, onClickChannel }) => (
  <div className="channels-container">
    {channels.map((channel, index) => (
      <Channel
        key={index}
        channel={channel}
        onClickChannel={onClickChannel}
        selectedChannel={selectedChannel}
      />
    ))
    }
  </div>
);

export default Channels;
