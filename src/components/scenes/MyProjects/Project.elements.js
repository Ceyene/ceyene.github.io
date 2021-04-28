//dependencies
import styled from "styled-components";
//global styles
import {
  StyledTertiaryTitle,
  StyledText,
  StyledUpperText,
  Button,
} from "../../styles/globalStyles";

export const StyledProject = styled.article`
  margin: 1rem;
  border-top: 0.15rem solid #c5c52e;
  border-right: 0.15rem solid #c5c52e;
  border-radius: 0.5rem;
  background-color: transparent;
  width: 90%;
  min-width: 18.75rem;
  box-shadow: 0.625rem 0.625rem 0.313rem 0rem rgba(227, 220, 227, 0.68);

  @media screen and (min-width: 900px) {
    width: 25%;
  }
`;

export const ProjectInfo = styled.div`
  padding: 1rem;
  background-color: transparent;
`;

export const ProjectTitle = styled(StyledTertiaryTitle)`
  color: #c5c52e;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  ${StyledTertiaryTitle}
`;

export const ProjectDescription = styled(StyledText)`
  text-transform: none;
  font-size: 0.913rem;
  line-height: 0.95rem;
  margin-bottom: 1.5rem;
  ${StyledText}
`;

export const ProjectTechUsed = styled(StyledUpperText)`
  font-size: 0.913rem;
  line-height: 0.95rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #c5c52e;
  ${StyledText};
`;

export const ProjectButton = styled(Button)`
  color: #c5c52e;
  border-color: #c5c52e;
  box-shadow: inset -0.15rem 0.12rem rgba(197, 197, 46, 0.327);

  svg {
    width: 1rem;
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 900px) {
    &:hover {
      background-image: linear-gradient(
        109.5deg,
        rgba(197, 197, 46, 0.6) 11.2%,
        rgba(197, 197, 46, 0.849) 100.2%
      );
      border-color: #ffffff;
    }
  }
  ${Button}
`;

export const ProjectImg = styled.img`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  width: 100%;
`;
