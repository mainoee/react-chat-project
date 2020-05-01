import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './authentication/signout'

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={"/signup"}>Sign Up</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/chat"}>Chat</Link>
      </li>
      <SignOutButton />
    </ul>
  </div>
);

export default Navigation;
