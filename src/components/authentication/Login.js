import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FormattedMessage, injectIntl } from 'react-intl';

import { withFirebase } from '../../service';

const Login = () => (
  <div className="app-wrapper">
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
        this.props.history.push('/chat');
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

    const { formatMessage } = this.props.intl;

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.onSubmit}>
            <h3>
              <FormattedMessage
                id="Login.title"
                defaultMessage="Login"
              />
            </h3>

            <div className="form-group">
              <label>
                <FormattedMessage
                 id="Login.email"
                 defaultMessage="Your email"
                />
              </label>
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                className="form-control"
                placeholder={formatMessage({ id: "Login.placeholder.email"})}
              />
            </div>

            <div className="form-group">
              <label>
                <FormattedMessage
                 id="Login.password"
                 defaultMessage="Your password"
                />
              </label>
              <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                className="form-control"
                placeholder={formatMessage({ id: "Login.placeholder.password"})}
              />
            </div>

            <button
              disabled={isInvalid}
              type="submit"
              className="btn btn-primary btn-block">
                <FormattedMessage
                  id="Button.login"
                  defaultMessage="Login"
                />
              </button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const LoginForm = compose(
  injectIntl,
  withRouter,
  withFirebase,
)(LoginFormBase);

export default Login;

export { LoginForm };
