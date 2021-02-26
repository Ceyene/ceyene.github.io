//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
//styles
import { StyledFooter } from "./Footer.elements";
import { StyledText } from "../../globalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>© 2021 — Cynthia Romero</StyledText>
    </StyledFooter>
  );
};

export default Footer;
