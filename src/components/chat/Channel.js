import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const Channel = (props) => {
  const { index, channel, selectedChannel, onClickChannel } = props;

  const handleClick = () => {
    onClickChannel(channel);
  }

  const channels = defineMessages({
    title_0: {
      id: 'Channel.politics',
      defaultMessage: `${channel}`
    },
    title_1: {
      id: 'Channel.economics',
      defaultMessage: `${channel}`
    },
    title_2: {
      id: 'Channel.world',
      defaultMessage: `${channel}`
    }
  })

  return (
    <p className={channel === selectedChannel ? 'active' : null }
      onClick={handleClick}>
        #<FormattedMessage
          {...channels[`title_${index}`]}
          values={{ channel: `${channel}` }}
        />
    </p>
  )
}

export default Channel;
