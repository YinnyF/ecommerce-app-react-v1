import React, { Component } from "react";

export default class Login extends Component {
  // initialise the state in the constructor
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password: </label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* Password ends */}

        <div className="text-right">
          {this.state.message}
          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }

  // executes when the user clicks on login
  onLoginClick = () => {
    if (this.state.email === "test@test.com" && this.state.password === "123") {
      // success
      this.setState({
        message: <span className="text-success">"Successfully logged in"</span>,
      });
    } else {
      // error
      this.setState({
        message: <span className="text-danger">"Invalid login"</span>,
      });
    }
  };
}
