import React, { Component } from "react";

export default class Login extends Component {
  // initialise the state in the constructor
  constructor(props) {
    super(props);
    this.state = { email: "test@test.com", password: "123" };
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

        <div>
          <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
        </div>
      </div>
    );
  }

  // executes when the user clicks on login
  onLoginClick = () => {
    console.log(this.state);
  }
}
