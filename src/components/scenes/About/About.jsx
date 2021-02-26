//dependencies
import React from "react";
//styles
import { StyledAbout, AboutText } from "./About.elements";
import { StyledSecondaryTitle } from "../../globalStyles";

const About = () => {
  return (
    <>
      <StyledAbout>
        <StyledSecondaryTitle>Welcome!</StyledSecondaryTitle>
        <AboutText>
          I´m a Web Developer from Córdoba, Argentina. I´m always interested in
          learning new ways of creating sites, I keep studying about it. Front
          End is my focus, so Javascript is my main language. React library is
          my main tool right now, but I'm open to learn any other JS libraries
          in the future.
        </AboutText>
      </StyledAbout>
    </>
  );
};

export default About;
