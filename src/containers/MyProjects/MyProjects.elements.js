//dependencies
import styled from "styled-components";
//global styles
import { StyledSection } from "../../components/styles/globalStyles";

export const StyledProjectsContainer = styled(StyledSection)`
  padding: 2.5rem 5% 4.5rem 5%;

  @media screen and (min-width: 900px) {
    padding: 2.5rem 15% 5.5rem 15%;
  }
  ${StyledSection}
`;

export const ProjectsExamples = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
