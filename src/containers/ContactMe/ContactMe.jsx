//dependencies
import React from "react";
//components
import HomeLink from "../../components/layout/HomeLink/HomeLink";
//styled components
import {
  StyledMainTitle,
  StyledText,
} from "../../components/styles/globalStyles";
import { StyledContact, SocialDiv, ContactButton } from "./ContactMe.elements";
//styled icons
import { Linkedin } from "@styled-icons/remix-fill/Linkedin";
import { Github } from "@styled-icons/bootstrap/Github";
import { Envelope } from "@styled-icons/bootstrap/Envelope";

const ContactMe = () => {
  return (
    <StyledContact>
      <StyledMainTitle>Contact me</StyledMainTitle>
      <StyledText>
        You can find me in these social networks, or write me an email. Let´s
        work together!
      </StyledText>
      <SocialDiv>
        <ContactButton
          as="a"
          href="https://www.linkedin.com/in/ce-y-ene/"
          target="_blank"
        >
          <Linkedin />
        </ContactButton>
        <ContactButton
          as="a"
          href="https://www.github.com/Ceyene"
          target="_blank"
        >
          <Github />
        </ContactButton>
        <ContactButton
          as="a"
          href="https://forms.gle/qEC3n2c97cBwHZez5"
          target="_blank"
        >
          <Envelope />
        </ContactButton>
      </SocialDiv>
      <HomeLink />
    </StyledContact>
  );
};

export default ContactMe;
