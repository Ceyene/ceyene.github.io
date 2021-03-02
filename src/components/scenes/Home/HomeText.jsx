//dependencies
import React from "react";
//styles
import { StyledHero, StyledHeader } from "./Home.elements.js";
import {
  StyledText,
  StyledMainTitle,
  StyledTertiaryTitle,
} from "../../styles/globalStyles";

const HomeText = () => {
  return (
    <StyledHero>
      <StyledHeader>
        <StyledTertiaryTitle>¡Hello! My name is</StyledTertiaryTitle>
        <StyledMainTitle>Cynthia Romero</StyledMainTitle>
        <StyledText>I am a Front End Web Developer</StyledText>
        <StyledText>from Córdoba, Argentina</StyledText>
      </StyledHeader>
    </StyledHero>
  );
};

export default HomeText;
