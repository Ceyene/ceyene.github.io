//dependencies
import React from "react";
//component styles
import {
  StyledAbout,
  StyledKnowledge,
  KnowledgeContainer,
  KnowledgeTech,
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
      <StyledSecondaryTitle>Tecnologies learned:</StyledSecondaryTitle>
      <KnowledgeContainer>
        <StyledKnowledge>
          <StyledSmallText>Web Development</StyledSmallText>
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
        </StyledKnowledge>
        <StyledKnowledge>
          <KnowledgeTech>
            {/*<ReactIcon />*/}
            <StyledTertiaryTitle>React</StyledTertiaryTitle>
          </KnowledgeTech>
          <KnowledgeTech>
            {/*<NodeIcon />*/}
            <StyledTertiaryTitle>Node JS</StyledTertiaryTitle>
          </KnowledgeTech>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>Version control</StyledSmallText>
          <KnowledgeTech>
            {/*<GitIcon />*/}
            <StyledTertiaryTitle>Git</StyledTertiaryTitle>
          </KnowledgeTech>
          <KnowledgeTech>
            {/*<GithubIcon />*/}
            <StyledTertiaryTitle>GitHub</StyledTertiaryTitle>
          </KnowledgeTech>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>Other JS Libraries:</StyledSmallText>
          <KnowledgeTech>
            {/*<StyledCompIcon />*/}
            <StyledTertiaryTitle>Styled Components</StyledTertiaryTitle>
          </KnowledgeTech>
          <KnowledgeTech>
            {/*<StyledIcon />*/}
            <StyledTertiaryTitle>Styled Icons</StyledTertiaryTitle>
          </KnowledgeTech>
          <KnowledgeTech>
            {/*<MomentIcon />*/}
            <StyledTertiaryTitle>Moment JS</StyledTertiaryTitle>
          </KnowledgeTech>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>CSS Preprocessor:</StyledSmallText>
          <KnowledgeTech>
            {/*<SassIcon />*/}
            <StyledTertiaryTitle>SASS</StyledTertiaryTitle>
          </KnowledgeTech>
        </StyledKnowledge>
        <StyledKnowledge>
          <StyledSmallText>CSS Libraries</StyledSmallText>
          <KnowledgeTech>
            {/*<BulmaIcon />*/}
            <StyledTertiaryTitle>Bulma</StyledTertiaryTitle>
          </KnowledgeTech>
          <KnowledgeTech>
            {/*<BootstrapIcon />*/}
            <StyledTertiaryTitle>Bootstrap</StyledTertiaryTitle>
          </KnowledgeTech>
        </StyledKnowledge>
        <StyledKnowledge>
          <KnowledgeTech>
            {/*<A11yIcon />*/}
            <StyledTertiaryTitle>Accesibility</StyledTertiaryTitle>
          </KnowledgeTech>
        </StyledKnowledge>
        <StyledKnowledge>
          <KnowledgeTech>
            {/*<ScrumIcon />*/}
            <StyledTertiaryTitle>Scrum</StyledTertiaryTitle>
          </KnowledgeTech>
        </StyledKnowledge>
      </KnowledgeContainer>
    </StyledAbout>
  );
};

export default Knowledge;
