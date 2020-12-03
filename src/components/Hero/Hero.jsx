//dependencies
import React from "react";
//styles
import { StyledHero, MainTitle } from "./Hero.elements";
import { StyledText } from "../../globalStyles";

const Hero = () => {
  return (
    <>
      <StyledHero>
        <MainTitle>Hi, I´m Cynthia Romero</MainTitle>
        <StyledText>Web Developer</StyledText>
      </StyledHero>
    </>
  );
};

export default Hero;
