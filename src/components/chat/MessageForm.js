import React from 'react';

import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const sendButton = makeStyles((theme) => ({
  root: {
    width: '10%',
    height: '100%',
  }
}));

const MessageForm = (props) => {
  const classes = sendButton();
  const gif = props.selectedGif

  return(
    <form onSubmit={(event) => props.onCreateMessage(event, props.authUser)} className="message-form">
      <input
        type="text"
        value={props.content}
        onChange={props.onChangeContent}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.root}
        labelstyle={{ fontSize: '10px' }}
        disabled={!gif && !props.content}
      >
        <FormattedMessage
          id="Button.send.messageForm"
          defaultMessage="Send"
        />
      </Button>
    </form>
  )
}

export default MessageForm;

