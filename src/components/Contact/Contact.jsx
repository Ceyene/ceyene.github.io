//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
//component styles
import {
  StyledContact,
  ContactTitle,
  ContactSocial,
  ContactButton,
} from "./Contact.elements";

const Contact = () => {
  return (
    <StyledContact>
      <ContactTitle>Let´s create something:</ContactTitle>
      <ContactSocial>
        <ContactButton as="a" href="https://www.linkedin.com/in/ce-y-ene/">
          <FontAwesomeIcon icon={faLinkedin} />
        </ContactButton>
        <ContactButton as="a" href="https://forms.gle/qEC3n2c97cBwHZez5">
          <FontAwesomeIcon icon={faEnvelope} />
        </ContactButton>
      </ContactSocial>
    </StyledContact>
  );
};

export default Contact;
