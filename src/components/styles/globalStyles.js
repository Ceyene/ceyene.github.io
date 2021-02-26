import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@400;700&family=Montserrat:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
  background-color: #ffffff;
  color: #060a24;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}
`;

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 1rem auto;
  padding: 0.25rem 1rem;
  border-width: 0.15rem;
  border-style: solid;
  border-radius: 0.2rem;

  @media screen and (min-width: 900px) {
    &:hover {
      color: #25c0d2;
    }

    &:active {
      color: rgba(6, 10, 35, 0.56);
    }
  }
`;

export const StyledMainTitle = styled.h1`
  font-family: "Averia Serif Libre", cursive;
  font-size: 2.25rem;
  line-height: 2.625rem;
  letter-spacing: 0;

  @media screen and (min-width: 900px) {
    font-size: 4rem;
    line-height: 4.6rem;
  }
`;

export const StyledSecondaryTitle = styled.h2`
  font-style: italic;
  font-family: "Averia Serif Libre", cursive;
  font-size: 2rem;

  @media screen and (min-width: 900px) {
    font-size: 3rem;
    line-height: 3.375rem;
  }
`;

export const StyledTertiaryTitle = styled.h3`
  font-weight: 500;
  font-family: "Averia Serif Libre", cursive;
  font-size: 1rem;
  line-height: 1.75rem;
  padding-top: 1rem;

  @media screen and (min-width: 900px) {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
`;

export const StyledText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  font-family: "Work Sans", sans-serif;
  line-height: 1.375rem;
  padding: 1rem 0;

  @media screen and (min-width: 900px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const FlexSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2.25rem;
  width: 100%;

  @media screen and (min-width: 900px) {
    max-width: 40vw;
  }
`;

export default GlobalStyle;
