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
        I´m a Front End Web Developer from Córdoba, Argentina. I´m always
        interested in learning how to create sites with a great user experience,
        I keep studying about it. Front End is my focus, so Javascript is my
        main language. React library is my tool right now, but I'm open to learn
        any other JS libraries in the future.
      </AboutText>
    </StyledAbout>
  );
};

export default About;
