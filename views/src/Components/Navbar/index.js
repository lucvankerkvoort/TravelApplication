import React, { useEffect } from "react";
import { images } from "../../Images";
import { Link, useHistory } from "react-router-dom";
import SignOutButton from "../SignOutButton/signout";

const Navbar = () => {
  const history = useHistory();

  useEffect(() => {
    console.log(history);
  }, [history.location.pathname]);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={images.Logo} alt="..." width="100px" />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p>Home</p>
        </Link>
        {localStorage.getItem("authUser") === "" ? (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Login</p>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Register</p>
            </Link>
          </>
        ) : (
          <>
            <SignOutButton />
            <Link
              to="/guide-reg"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Become a Guide</p>
            </Link>

            <Link to="/chat" style={{ textDecoration: "none", color: "black" }}>
              <p>Chats</p>
            </Link>
            {/* <Link style={{ textDecoration: "none", color: "black" }}>
              <p>Help</p>
            </Link> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
