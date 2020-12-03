//dependencies
import styled from "styled-components";
//global styles
import { StyledTertiaryTitle, StyledText } from "../../globalStyles";

export const StyledProject = styled.div`
  margin: 1rem;
  border: 0.15rem solid #ffffff;
  background-color: rgba(8, 8, 8, 0.1);
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
`;

export const ProjectInfo = styled.div`
  padding: 1rem;
  background-color: transparent;
  color: #ffffff;
`;

export const ProjectTitle = styled(StyledTertiaryTitle)`
  color: #ffffff;
  ${StyledTertiaryTitle}
`;

export const ProjectDescription = styled(StyledText)`
  color: #ffffff;
  ${StyledText}
`;

export const ProjectButton = styled.button`
  display: inline-block;
  color: #ffffff;
  font-size: 1rem;
  margin: 1rem auto;
  padding: 0.25rem 1rem;
  border: 0.15rem solid #ffffff;
  border-radius: 0.2rem;
`;
