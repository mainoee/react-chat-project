import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { FormattedMessage} from 'react-intl';

import SignOutButton from './authentication/Signout'

import { AuthUserContext } from './session';

const Navigation = () => (
  <nav className="navbar-light">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </nav>
);

const NavigationAuth = () => (
  <ul className="menu">
    <Link className="nav-link" to={"/"}>
      <FormattedMessage
        id="Home.authLink"
        defaultMessage="Home"
      />
    </Link>
    <Link className="nav-link" to={"/chat"}>
      <FormattedMessage
        id="Chat.authLink"
        defaultMessage="Chat"
      />
    </Link>
    <SignOutButton />
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="menu">
    <Link className="nav-link" to={"/"}>
      <FormattedMessage
        id="Home.nonAuthLink"
        defaultMessage="Home"
      />
    </Link>
    <Button
      color="primary"
      variant="contained"
      className="button-authentication">
        <Link to={"/signup"} className="button-link">
          <FormattedMessage
            id="Signup.nonAuthLink"
            defaultMessage="Sign up"
          />
        </Link>
    </Button>
    <Button
      color="primary"
      variant="contained"
      className="button-authentication">
        <Link to={"/login"} className="button-link">
          <FormattedMessage
            id="Login.nonAuthLink"
            defaultMessage="Login"
          />
        </Link>
    </Button>
  </ul>
);

export default Navigation;
