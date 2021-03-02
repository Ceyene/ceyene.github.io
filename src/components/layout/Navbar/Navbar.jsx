//dependencies
import React from "react";
import { Link } from "react-router-dom";
//styles
import {
  StyledNavbar,
  StyledNavUl,
  StyledNavLi,
  StyledNavA,
  DesktopMenu,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavUl>
        <StyledNavLi>
          <StyledNavA>
            <Link to="/projects">
              <i className="fas fa-laptop-code"></i>
              <DesktopMenu>My projects</DesktopMenu>
            </Link>
          </StyledNavA>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavA>
            <Link to="/about">
              <i className="fas fa-user"></i>
              <DesktopMenu>About me</DesktopMenu>
            </Link>
          </StyledNavA>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavA>
            <Link to="/contact">
              <i className="fas fa-envelope"></i>
              <DesktopMenu>Contact me</DesktopMenu>
            </Link>
          </StyledNavA>
        </StyledNavLi>
      </StyledNavUl>
    </StyledNavbar>
  );
};

export default Navbar;
