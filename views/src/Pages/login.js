import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { images } from "../Images";

import { SignUpLink } from "./register";
import { withFirebase } from "../Firebase";

const Login = () => (
  <div className="login" style={{ background: `url(${images.jumbotron1})` }}>
    <h1>Login</h1>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((user) => {
        this.setState({ ...INITIAL_STATE });
        localStorage.setItem("authUser", JSON.stringify(user.user.l));
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <label>Email:</label>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <label>Password:</label>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
        <div className="login-box-footer">
          <SignUpLink />
        </div>
      </form>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default Login;

export { SignInForm };
