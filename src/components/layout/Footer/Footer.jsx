//dependencies
import React from "react";
//assets
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
// import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
//styles
import { StyledFooter } from "./Footer.elements";
import { StyledSmallText } from "../../styles/globalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSmallText>© 2021 — Cynthia Romero</StyledSmallText>
    </StyledFooter>
  );
};

export default Footer;
