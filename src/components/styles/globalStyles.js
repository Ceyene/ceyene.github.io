//dependencies
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@400;700&family=Montserrat:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  color: #555555;
  background: linear-gradient(to right, #efefbb, #d4d3dd);
  line-height: 1.75;
  letter-spacing: 0.07rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

a {
  text-decoration: none;
  color: #7d6386;
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
  text-transform: uppercase;
  color: #7d6386;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  margin: 0 auto;
  display: block;

  &::after {
    content: "";
    display: block;
    background-color: #7d6386;
    height: 0.063rem;
    margin: 0.75rem auto;
    width: 7.5rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 2rem;
    letter-spacing: 0.15rem;
  }
`;

export const StyledSecondaryTitle = styled.h2`
  font-style: italic;
  font-family: "Averia Serif Libre", cursive;
  font-size: 2rem;

  @media screen and (min-width: 900px) {
    font-size: 3rem;
  }
`;

export const StyledTertiaryTitle = styled.h3`
  text-align: left;
  font-size: 1.1rem;

  @media screen and (min-width: 900px) {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
`;

export const StyledText = styled.p`
  margin: auto;
  font-size: 0.813rem;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media screen and (min-width: 900px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const StyledSmallText = styled.p`
  margin: auto;
  font-size: 0.813rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media screen and (min-width: 900px) {
    font-size: 0.95rem;
    line-height: 1.5rem;
  }
`;

export const FlexSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyle;
