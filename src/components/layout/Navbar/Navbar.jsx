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
//styled icons
import { Home } from "@styled-icons/entypo/Home";
import { Code } from "@styled-icons/entypo/Code";
import { User } from "@styled-icons/boxicons-solid/User";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavUl>
        <StyledNavLi>
          <StyledNavA>
            <Link to="/">
              <Home />
              <DesktopMenu>Home</DesktopMenu>
            </Link>
          </StyledNavA>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavA>
            <Link to="/projects">
              <Code />
              <DesktopMenu>My projects</DesktopMenu>
            </Link>
          </StyledNavA>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavA>
            <Link to="/about">
              <User />
              <DesktopMenu>About me</DesktopMenu>
            </Link>
          </StyledNavA>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavA>
            <Link to="/contact">
              <EmailOutline />
              <DesktopMenu>Contact me</DesktopMenu>
            </Link>
          </StyledNavA>
        </StyledNavLi>
      </StyledNavUl>
    </StyledNavbar>
  );
};

export default Navbar;
