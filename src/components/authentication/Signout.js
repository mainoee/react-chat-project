import React from 'react';
import Button from '@material-ui/core/Button';

import { withFirebase } from '../../service';

const SignOutButton = ({ firebase }) => (
  <Button
    onClick={firebase.doSignOut}
    variant="contained"
    color="secondary"
  >
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
