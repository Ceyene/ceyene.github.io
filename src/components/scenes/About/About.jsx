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
        I'm a Front End Web Developer from Cordoba, Argentina. I'm passionate
        about creating websites with a great user experience. Front End is my
        field; Javascript is my main programming language. React is what I'm
        using most right now, but I'm open to learn any other JS libraries in
        the future.
      </AboutText>
    </StyledAbout>
  );
};

export default About;
