import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './authentication/signout'

const Navigation = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/signup"}>Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/chat"}>Chat</Link>
            </li>
            <SignOutButton />
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navigation;
