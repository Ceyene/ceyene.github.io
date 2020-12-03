//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUniversalAccess,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const Knowledge = () => {
  return (
    <section className="Knowledge">
      <h2 className="Knowledge__title">Tecnologies learned:</h2>
      <div className="Knowledge__container">
        <div className="Knowledge__tech">
          <FontAwesomeIcon icon={faReact} className="Knowledge__tech-icon" />
          <h3 className="Knowledge__tech-description">React</h3>
        </div>
        <div className="Knowledge__tech">
          <FontAwesomeIcon
            icon={faUniversalAccess}
            className="Knowledge__tech-icon"
          />
          <h3 className="Knowledge__tech-description">Accesibility</h3>
        </div>
      </div>
      <div className="Knowledge__tech">
        <FontAwesomeIcon icon={faCodeBranch} className="Knowledge__tech-icon" />
        <h3 className="Knowledge__tech-description">Git / gitHub</h3>
      </div>
      <div className="Knowledge__tech">
        <FontAwesomeIcon icon={faHtml5} className="Knowledge__tech-icon" />
        <h3 className="Knowledge__tech-description">HTML5</h3>
      </div>
      <div className="Knowledge__tech">
        <FontAwesomeIcon icon={faCss3Alt} className="Knowledge__tech-icon" />
        <h3 className="Knowledge__tech-description">CSS3</h3>
      </div>
      <div className="Knowledge__tech">
        <FontAwesomeIcon icon={faJs} className="Knowledge__tech-icon" />
        <h3 className="Knowledge__tech-description">Javascript</h3>
      </div>
    </section>
  );
};

export default Knowledge;
