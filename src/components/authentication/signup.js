import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      error: null,
    }
  }

  onSubmit = event => {

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

export default Signup;
