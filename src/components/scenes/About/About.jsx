//dependencies
import React from "react";
//styles
import { StyledAbout, AboutText } from "./About.elements";
import { StyledSecondaryTitle } from "../../styles/globalStyles";

const About = () => {
  return (
    <StyledAbout>
      <StyledSecondaryTitle>Welcome!</StyledSecondaryTitle>
      <AboutText>
        I'm a Front End Web Developer from Cordoba, Argentina. As an enthusiast
        of JavaScript, I continue exploring any new features and libraries.
        Currently, I'm expanding my knowledge with some personal projects, while
        I'm looking for my first job in this industry.
      </AboutText>
    </StyledAbout>
  );
};

export default About;
