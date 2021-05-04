import React from "react";
import "../SCSS/Navbar.scss";
const Navbar = () => {
  return (
    /*full-screen navbar container */
    <div className="container">
      <nav className="navbar">
        {/* 1st Burger stick */}
        <div className="navbar__burger navbar__burger--1"></div>
        {/* 2nd Burger stick */}

        <div className="navbar__burger navbar__burger--2"></div>
        {/* 3rd Burger stick */}

        <div className="navbar__burger navbar__burger--3"></div>
      </nav>
    </div>
  );
};
export default Navbar;
