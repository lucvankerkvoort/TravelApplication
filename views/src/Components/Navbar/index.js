import React from "react";
import Login from "../../Pages/login";
import Register from "../../Pages/register";
import { images } from "../../Images";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  const handleClick = (element) => {
    switch (element) {
      case "login":
        return <Login {...props} />;
      case "register":
        return <Register {...props} />;
      default:
        return;
    }
  };
  return (
    <div className="navbar incapsulated">
      <div className="logo">
        <img src={images.Logo} alt="..." width="100px" />
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
