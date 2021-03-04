//dependencies
import styled from "styled-components";
//global styles
import {
  StyledTertiaryTitle,
  StyledText,
  Button,
} from "../../styles/globalStyles";

export const StyledProject = styled.article`
  margin: 1rem;
  border-top: 0.15rem solid #c5c52e;
  border-right: 0.15rem solid #c5c52e;
  border-radius: 0.5rem;
  background-color: transparent;
  width: 80%;
  min-width: 300px;
  box-shadow: 0.625rem 0.625rem 0.313rem 0rem rgba(227, 220, 227, 0.68);

  @media screen and (min-width: 900px) {
    width: 45%;
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

export const ProjectButton = styled(Button)`
  color: #c5c52e;
  border-color: #c5c52e;
  ${Button}
`;

export const ProjectImg = styled.img`
  border-top-right-radius: 0.5rem;
  width: 100%;
`;
