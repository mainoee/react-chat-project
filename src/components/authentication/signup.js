import React, { Component } from "react";

import { withFirebase } from '../../service';

const Signup = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
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
    const {
      username,
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '' ||
      username === '';

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.onSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Your username</label>
              <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                className="form-control"
                placeholder="Enter username"
              />
            </div>

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

            <button disabled={isInvalid} type="submit" className="btn btn-primary btn-block">Sign Up</button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const SignUpForm = withFirebase(SignUpFormBase);

export default Signup;

export { SignUpForm };
