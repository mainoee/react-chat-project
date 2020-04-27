import React from 'react';

const Channels = (props) => {
  const renderChannels = () => {
    return props.channels.map((channel, index) => {
      return (
        <p key={index}>{channel}</p>
      );
    });
  };

  return (
    <div className="channels-container">{renderChannels()}</div>
  );
};


export default Channels;