import React, { Component } from "react";

class Signup extends Component {
render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Choose username</label>
              <input type="username" className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group">
              <label>Your email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
