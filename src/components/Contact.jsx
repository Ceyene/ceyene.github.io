//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">Let´s create something:</h2>
      <div className="social">
        <a href="https://www.linkedin.com/in/ce-y-ene/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://forms.gle/qEC3n2c97cBwHZez5">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
