//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
//component styles
import { StyledContact, ContactTitle, ContactButton } from "./Contact.elements";
import { SocialContainer } from "../../globalStyles";

const Contact = () => {
  return (
    <StyledContact>
      <ContactTitle>Let´s create something:</ContactTitle>
      <SocialContainer>
        <ContactButton as="a" href="https://www.linkedin.com/in/ce-y-ene/">
          <FontAwesomeIcon icon={faLinkedin} />
        </ContactButton>
        <ContactButton as="a" href="https://forms.gle/qEC3n2c97cBwHZez5">
          <FontAwesomeIcon icon={faEnvelope} />
        </ContactButton>
      </SocialContainer>
    </StyledContact>
  );
};

export default Contact;
