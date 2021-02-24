//dependencies
import React from "react";
//styles
import { StyledHero, MainTitle } from "./Home.elements";
import { StyledText } from "../../globalStyles";

const Home = () => {
  return (
    <>
      <StyledHero>
        <MainTitle>Hi, I´m Cynthia Romero</MainTitle>
        <StyledText>Web Developer</StyledText>
      </StyledHero>
    </>
  );
};

export default Home;
