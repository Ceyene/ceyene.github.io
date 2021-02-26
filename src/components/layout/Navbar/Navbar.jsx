//dependencies
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#">
            <i className="fas fa-laptop-code"></i>
            <span className="desktopMenu">My projects</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user"></i>
            <span className="desktopMenu">About me</span>
          </a>
        </li>
        <li>
          <a href="./contact.html">
            <i className="fas fa-envelope"></i>
            <span className="desktopMenu">Contact me</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
