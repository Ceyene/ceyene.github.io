//dependencies
import React from "react";
//components
import About from "../../components/scenes/About/About";
import Knowledge from "../../components/scenes/About/Knowledge";
import HomeLink from "../../components/layout/HomeLink/HomeLink";
//styled components
import {
  StyledMainTitle,
  StyledSection,
} from "../../components/styles/globalStyles";

const AboutMe = () => {
  return (
    <StyledSection>
      <StyledMainTitle>About me</StyledMainTitle>
      <About />
      <Knowledge />
      <HomeLink />
    </StyledSection>
  );
};

export default AboutMe;
