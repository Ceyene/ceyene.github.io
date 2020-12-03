//dependencies
import styled from "styled-components";
//global styles
import { StyledSecondaryTitle } from "../../globalStyles";

export const StyledProjectsContainer = styled.section`
  padding: 3.5rem 1rem;
  background-image: linear-gradient(
    25deg,
    rgba(70, 3, 132, 1) 0%,
    rgba(37, 192, 210, 1) 50%,
    rgba(224, 64, 100, 1) 100%
  );
`;

export const ProjectsSectionTitle = styled(StyledSecondaryTitle)`
  color: #ffffff;
  ${StyledSecondaryTitle}
`;

export const ProjectsExamples = styled.div`
  justify-items: center;
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
`;
