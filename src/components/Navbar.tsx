import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div><Link to="/">Home</Link></div>
      <div><Link to="/login">Login</Link></div>
      <div><Link to="/register">Register</Link></div>

    </nav>
  );
};

export default Navbar;
