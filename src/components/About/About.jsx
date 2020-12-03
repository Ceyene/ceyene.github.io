//dependencies
import React from "react";
//styles
import { StyledAbout } from "./About.elements";

const About = () => {
  return (
    <>
      <StyledAbout>
        <h2 className="About__title">Welcome!</h2>
        <p className="About__text">
          I´m a Web Developer trainee from Córdoba, Argentina. Because I´m
          always interested in learning new ways of creating sites, I keep
          studying and reading about it. Front End is my focus, so Javascript is
          my main language. React library is my main tool right now, but I'm
          open to learn Vue or Angular in the future.
        </p>
      </StyledAbout>
    </>
  );
};

export default About;
