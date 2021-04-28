//dependencies
import React from "react";
//styles
import { StyledHero, StyledHeader } from "./Home.elements.js";
import {
  StyledUpperText,
  StyledMainTitle,
  StyledTertiaryTitle,
} from "../../styles/globalStyles";

const HomeText = () => {
  return (
    <StyledHero>
      <StyledHeader>
        <StyledTertiaryTitle>Hello! My name is</StyledTertiaryTitle>
        <StyledMainTitle>Cynthia Romero</StyledMainTitle>
        <StyledUpperText>I'm a Front End Web Developer</StyledUpperText>
        <StyledUpperText>from Cordoba, Argentina</StyledUpperText>
      </StyledHeader>
    </StyledHero>
  );
};

export default HomeText;
