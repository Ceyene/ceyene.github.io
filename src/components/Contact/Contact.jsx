//dependencies
import React from "react";
//component styles
import {
  StyledContact,
  ContactTitle,
  ContactButton,
  LinkedInIcon,
  EmailIcon,
} from "./Contact.elements";
import { SocialContainer } from "../../globalStyles";

const Contact = () => {
  return (
    <StyledContact>
      <ContactTitle>Let´s work togheter:</ContactTitle>
      <SocialContainer>
        <ContactButton as="a" href="https://www.linkedin.com/in/ce-y-ene/">
          <LinkedInIcon />
        </ContactButton>
        <ContactButton as="a" href="https://forms.gle/qEC3n2c97cBwHZez5">
          <EmailIcon />
        </ContactButton>
      </SocialContainer>
    </StyledContact>
  );
};

export default Contact;
