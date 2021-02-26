//dependencies
import React from "react";
//styles
import { StyledHero, MainTitle } from "./HomeText.elements";
import { StyledText } from "../../globalStyles";

const HomeText = () => {
  return (
    <>
      <StyledHero>
        <MainTitle>Hi, I´m Cynthia Romero</MainTitle>
        <StyledText>Web Developer</StyledText>
      </StyledHero>
    </>
  );
};

export default HomeText;
