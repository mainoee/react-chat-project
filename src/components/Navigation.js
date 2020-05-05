import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
    <Link className="nav-link" to={"/chat"}>Chat</Link>
    <SignOutButton />
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="menu">
    <Link className="nav-link" to={"/"}>Home</Link>
    <Button
      color="primary"
      variant="outlined"
      className="button-authentication">
        <Link to={"/signup"}>Sign Up</Link>
    </Button>
    <Button
      color="primary"
      variant="outlined"
      className="button-authentication">
        <Link to={"/login"}>Login</Link>
    </Button>
  </ul>
);

export default Navigation;
