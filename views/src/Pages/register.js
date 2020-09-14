import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { db } from "../Firebase/firebase";
import { store } from "../Services/store";
import { images } from "../Images";
import { compose } from "recompose";
import AddPicture from "../Components/AddPicture/addpicture";
import Preview from "../Components/Preview/preview";

const Register = () => (
  <div
    className="register"
    style={{
      background: `url(${images.jumbotron1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h1>Register</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  image: false,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  static userData = store;

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;
    const { dispatch } = this.context;
    const info = {
      images: this.context.state.images,
      username,
      email,
    };
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        db.collection("users")
          .doc(username)
          .set(info)
          .then((res) => console.log(res));

        // this.setState({ ...INITIAL_STATE });
        dispatch({ type: "authed", payload: true });
        localStorage.setItem("authUser", JSON.stringify(authUser.user.l));
        localStorage.setItem(
          "currentUser",
          JSON.stringify(this.props.firebase.auth.currentUser)
        );
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  setImages = (input) => {
    this.setState({ image: input });
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      image,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "" ||
      image === false;

    return (
      <div className="registration-div">
        <div className="profile-picture">
          <AddPicture setImage={this.setImages} />
          <Preview setImage={this.setImages} />
        </div>
        <div className="registration-form">
          <form onSubmit={this.onSubmit}>
            <label>Username:</label>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />

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
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />

            <label>Confirm Password:</label>
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button disabled={isInvalid} type="submit">
              Sign Up
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to="/register">Sign Up</Link>
  </p>
);

SignUpFormBase.contextType = store;

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default Register;

export { SignUpForm, SignUpLink };
