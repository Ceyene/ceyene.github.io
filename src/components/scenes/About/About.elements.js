//dependencies
import styled from "styled-components";
//global styles
import { StyledText } from "../../globalStyles";

export const StyledAbout = styled.section`
  padding: 2.5rem;

  @media screen and (min-width: 900px) {
    padding: 2.5rem 15%;
  }
`;

export const AboutText = styled(StyledText)`
  display: inline;
  ${StyledText}
`;
