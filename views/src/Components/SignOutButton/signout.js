import React, { useContext } from "react";
import { store } from "../../Services/store";

import { withFirebase } from "../../Firebase";

const SignOutButton = ({ firebase }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  return (
    <p
      type="button"
      style={{ cursor: "pointer" }}
      onClick={() => {
        firebase
          .doSignOut()
          .then(() => localStorage.setItem("authUser", ""))
          .then(() => dispatch({ type: "authed", payload: false }));

        // const execute = new Promise(() => firebase.doSignOut());
        // execute.then(() => );
      }}
    >
      Sign Out
    </p>
  );
};

export default withFirebase(SignOutButton);
