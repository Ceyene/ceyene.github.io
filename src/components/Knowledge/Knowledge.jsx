//dependencies
import React from "react";
//component styles
import {
  StyledKnowledge,
  KnowledgeContainer,
  KnowledgeTech,
} from "./Knowledge.elements";
//global styles
import { StyledSecondaryTitle, StyledTertiaryTitle } from "../../globalStyles";

const Knowledge = () => {
  return (
    <StyledKnowledge>
      <StyledSecondaryTitle>Tecnologies learned:</StyledSecondaryTitle>
      <KnowledgeContainer>
        <KnowledgeTech>
          {/*<ReactIcon />*/}
          <StyledTertiaryTitle>React</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          {/*<A11yIcon />*/}
          <StyledTertiaryTitle>Accesibility</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          {/*<GitIcon />*/}
          <StyledTertiaryTitle>Git / gitHub</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          {/*<HtmlIcon />*/}
          <StyledTertiaryTitle>HTML5</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          {/*<CssIcon />*/}
          <StyledTertiaryTitle>CSS3</StyledTertiaryTitle>
        </KnowledgeTech>
        <KnowledgeTech>
          {/*<JsIcon />*/}
          <StyledTertiaryTitle>Javascript</StyledTertiaryTitle>
        </KnowledgeTech>
      </KnowledgeContainer>
    </StyledKnowledge>
  );
};

export default Knowledge;
