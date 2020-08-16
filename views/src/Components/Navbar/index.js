import React from "react";
import { images } from "../../Images";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar incapsulated">
      <div className="logo">
        <Link to="/">
          <img src={images.Logo} alt="..." width="100px" />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p>Home</p>
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <p>Login</p>
        </Link>
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <p>Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
