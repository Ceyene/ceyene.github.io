//dependencies
import React from "react";
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
          <StyledNavA href="/projects">
            <i className="fas fa-laptop-code"></i>
            <DesktopMenu>My projects</DesktopMenu>
          </StyledNavA>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavA href="/aboutme">
            <i className="fas fa-user"></i>
            <DesktopMenu>About me</DesktopMenu>
          </StyledNavA>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavA href="./contact.html">
            <i className="fas fa-envelope"></i>
            <DesktopMenu>Contact me</DesktopMenu>
          </StyledNavA>
        </StyledNavLi>
      </StyledNavUl>
    </StyledNavbar>
  );
};

export default Navbar;
