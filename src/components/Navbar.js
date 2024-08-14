import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Canvas App</div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
