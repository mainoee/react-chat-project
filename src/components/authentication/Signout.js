import React from 'react';
import Button from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';

import { withFirebase } from '../../service';

const SignOutButton = ({ firebase }) => (
  <Button
    onClick={firebase.doSignOut}
    variant="contained"
    color="secondary"
  >
    <FormattedMessage id="Button.signout" defaultMessage="Sign out" />
  </Button>
);

export default withFirebase(SignOutButton);
