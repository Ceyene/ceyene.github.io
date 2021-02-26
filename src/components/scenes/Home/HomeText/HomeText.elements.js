//dependencies
import styled from "styled-components";
//global styles
import { StyledMainTitle } from "../../globalStyles";

export const StyledHero = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  background-image: url("https://image.freepik.com/vector-gratis/colorido-fondo-acuarela_23-2148492952.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
`;

export const MainTitle = styled(StyledMainTitle)`
  display: inline;
  ${StyledMainTitle}
`;
