//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="text">© 2020 — Cynthia Romero</div>
      <div class="social">
        <a href="https://github.com/Ceyene">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://codepen.io/ceyene">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
        <a href="https://codesandbox.io/u/Ceyene">
          <FontAwesomeIcon icon={faLaptopCode} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
