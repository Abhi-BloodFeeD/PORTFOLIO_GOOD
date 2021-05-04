import React from "react";
import "../SCSS/Navbar.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <div type="checkbox" className="navbar__hamburger"></div>
      <div className="navbar__hamburger--line "></div>
      <div className="navbar__hamburger--div">
        {/* <div className="navbar__div__component navbar__div__component--home">HOME</div>
        <div className="navbar__div__component navbar__div__component--about">ABOUT</div>
        <div className="navbar__div__component navbar__div__component--gallery">GALLERY</div>
        <div className="navbar__div__component navbar__div__component--contact">CONTACT</div> */}
      </div>
    </nav>
  );
}

export default Navbar;
