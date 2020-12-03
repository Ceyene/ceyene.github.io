//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
//styles
import { StyledFooter } from "./Footer.elements";
import { SocialContainer, StyledText } from "../../globalStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>© 2020 — Cynthia Romero</StyledText>
      <SocialContainer>
        <a href="https://github.com/Ceyene">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://codepen.io/ceyene">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
        <a href="https://codesandbox.io/u/Ceyene">
          <FontAwesomeIcon icon={faLaptopCode} />
        </a>
      </SocialContainer>
    </StyledFooter>
  );
};

export default Footer;
