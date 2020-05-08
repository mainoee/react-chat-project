import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context';
import { withFirebase } from '../../service';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push('/login');
          }

          this.props.firebase.user(authUser.uid).on('value', snapshot => {
            const user = snapshot.val();

            authUser.updateProfile({
              displayName: user.username,
            });
          });
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    // Avoid showing the protected page before the redirect happens
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;
