import React, { useEffect } from "react";
import { images } from "../../Images";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOutButton/signout";

import SearchLocationInput from "../GoogleMaps/autocomplete";

const Navbar = () => {
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
        <div className="navbar-search">
          <SearchLocationInput />
        </div>
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
