//dependencies
import React from "react";
//styles
import {
  StyledHero,
  StyledHeaderImg,
  StyledLogo,
  StyledDiv,
} from "./Home.elements";
//images
import ProfilePic from "../../images/perfil.jpg";
import Logo from "../../images/faviconCyn.png";

const HomeImg = () => {
  return (
    <StyledHero>
      <StyledDiv>
        <StyledHeaderImg src={ProfilePic} alt="Cynthia Romero" />
        <StyledLogo src={Logo} alt="Logo" />
      </StyledDiv>
    </StyledHero>
  );
};

export default HomeImg;
