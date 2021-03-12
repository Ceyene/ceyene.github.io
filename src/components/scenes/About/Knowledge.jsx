//dependencies
import React from "react";
//component styles
import {
  StyledAbout,
  StyledKnowledge,
  KnowledgeContainer,
} from "./About.elements";
//global styles
import {
  StyledSecondaryTitle,
  StyledTertiaryTitle,
  StyledSmallText,
} from "../../styles/globalStyles";

const Knowledge = () => {
  return (
    <StyledAbout>
      <StyledSecondaryTitle>Tecnologies learnt so far:</StyledSecondaryTitle>
      <KnowledgeContainer>
        <StyledKnowledge>
          <StyledSmallText>Web Development:</StyledSmallText>
          <StyledTertiaryTitle>HTML5</StyledTertiaryTitle>
          <StyledTertiaryTitle>CSS3</StyledTertiaryTitle>
          <StyledTertiaryTitle>Javascript</StyledTertiaryTitle>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledTertiaryTitle>React</StyledTertiaryTitle>
          <StyledTertiaryTitle>Node JS</StyledTertiaryTitle>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>Version control:</StyledSmallText>
          <StyledTertiaryTitle>Git</StyledTertiaryTitle>
          <StyledTertiaryTitle>GitHub</StyledTertiaryTitle>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>Other Libraries:</StyledSmallText>
          <StyledTertiaryTitle>Styled Components</StyledTertiaryTitle>
          <StyledTertiaryTitle>Styled Icons</StyledTertiaryTitle>
          <StyledTertiaryTitle>Moment JS</StyledTertiaryTitle>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>CSS Preprocessor:</StyledSmallText>
          <StyledTertiaryTitle>SASS</StyledTertiaryTitle>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>CSS Frameworks:</StyledSmallText>
          <StyledTertiaryTitle>Bulma</StyledTertiaryTitle>
          <StyledTertiaryTitle>Bootstrap</StyledTertiaryTitle>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledTertiaryTitle>Accesibility</StyledTertiaryTitle>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledTertiaryTitle>Scrum</StyledTertiaryTitle>
        </StyledKnowledge>
      </KnowledgeContainer>
    </StyledAbout>
  );
};

export default Knowledge;
