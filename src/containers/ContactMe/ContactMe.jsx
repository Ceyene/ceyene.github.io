//dependencies
import React from "react";
//components
import HomeLink from "../../components/layout/HomeLink/HomeLink";
import ContactButton from "../../components/scenes/Contact/ContactButton";
//component styles
import {
  StyledMainTitle,
  StyledText,
} from "../../components/styles/globalStyles";
import { StyledContact, SocialDiv } from "./ContactMe.elements";

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
          {/* <LinkedIcon /> */}
        </ContactButton>
        <ContactButton
          as="a"
          href="https://www.github.com/Ceyene"
          target="_blank"
        >
          {/*<GitHubIcon />*/}
        </ContactButton>
        <ContactButton
          as="a"
          href="https://forms.gle/qEC3n2c97cBwHZez5"
          target="_blank"
        >
          {/*<EmailIcon />*/}
        </ContactButton>
      </SocialDiv>
      <HomeLink />
    </StyledContact>
  );
};

export default ContactMe;
