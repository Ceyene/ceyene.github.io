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
  border-radius: 0.5rem;
  background-color: transparent;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.35);
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.25);
  border-left: 0.1rem solid rgba(0, 0, 0, 0.25);
  min-width: 18.75rem;
  box-shadow: 0.625rem 0.625rem 0.313rem 0rem rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 900px) {
    width: 25%;
  }
`;

export const ProjectInfo = styled.div`
  padding: 1rem;
  background-color: transparent;
`;

export const ProjectTitle = styled(StyledTertiaryTitle)`
  color: #a7c9e3;
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
  color: #9599e2;
  ${StyledText};
`;

export const ProjectButton = styled(Button)`
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border-color: transparent;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.63);

  svg {
    width: 1rem;
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 900px) {
    &:hover {
      color: #e0c3fc;
      border-color: #e0c3fc;
      background-image: none;
      box-shadow: inset -0.1rem 0.15rem rgba(0, 0, 0, 0.35);
    }
  }
  ${Button}
`;

export const ProjectImg = styled.img`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  width: 100%;
`;
