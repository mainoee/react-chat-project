import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../service';

const Login = () => (
  <div>
    <LoginForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/home');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();

  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = email === '' || password === '';

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.onSubmit}>
            <h3>Login</h3>

            <div className="form-group">
              <label>Your email</label>
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                className="form-control"
                placeholder="Enter password" />
            </div>

            <button disabled={isInvalid} type="submit" className="btn btn-primary btn-block">Login</button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const LoginForm = compose(
  withRouter,
  withFirebase,
)(LoginFormBase);

export default Login;

export { LoginForm };
