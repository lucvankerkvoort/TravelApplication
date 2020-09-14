import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { images } from "../Images";
import { store } from "../Services/store";
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
  static userData = store;

  onSubmit = (event) => {
    const { email, password } = this.state;
    const { dispatch } = this.context;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((user) => {
        this.setState({ ...INITIAL_STATE });
        localStorage.setItem("authUser", JSON.stringify(user.user.l));
        localStorage.setItem(
          "currentUser",
          JSON.stringify(this.props.firebase.auth.currentUser)
        );
      })
      .then(() => {
        dispatch({ type: "authed", payload: true });
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
    console.log(this.props.firebase.auth.currentUser);
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

SignInFormBase.contextType = store;
const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default Login;

export { SignInForm };
