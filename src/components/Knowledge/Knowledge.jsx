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
//component styles
import {
  StyledKnowledge,
  KnowledgeContainer,
  KnowledgeTech,
} from "./Hero.elements";
//global styles
import { StyledSecondaryTitle, StyledTertiaryTitle } from "../../globalStyles";

const Knowledge = () => {
  return (
    <StyledKnowledge>
      <StyledSecondaryTitle>Tecnologies learned:</StyledSecondaryTitle>
      <KnowledgeContainer>
        <KnowledgeTech>
          <FontAwesomeIcon icon={faReact} className="Knowledge__tech-icon" />
          <StyledTertiaryTitle>React</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          <FontAwesomeIcon
            icon={faUniversalAccess}
            className="Knowledge__tech-icon"
          />
          <StyledTertiaryTitle>Accesibility</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          <FontAwesomeIcon
            icon={faCodeBranch}
            className="Knowledge__tech-icon"
          />
          <StyledTertiaryTitle>Git / gitHub</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          <FontAwesomeIcon icon={faHtml5} className="Knowledge__tech-icon" />
          <StyledTertiaryTitle>HTML5</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          <FontAwesomeIcon icon={faCss3Alt} className="Knowledge__tech-icon" />
          <StyledTertiaryTitle>CSS3</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          <FontAwesomeIcon icon={faJs} className="Knowledge__tech-icon" />
          <StyledTertiaryTitle>Javascript</StyledTertiaryTitle>
        </KnowledgeTech>
      </KnowledgeContainer>
    </StyledKnowledge>
  );
};

export default Knowledge;
