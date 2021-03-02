//dependencies
import styled from "styled-components";

export const NotFoundContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 15vh);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotFoundTitle = styled.h1`
  font-size: 5.625rem;
`;

export const NotFoundText = styled.p`
  font-size: 1.563rem;
  margin-bottom: 1.5rem;
`;

export const StyledLink = styled.div`
  text-align: center;
  a {
    padding: 1rem 2.5rem;
    margin-top: 1.5rem;
    background-color: #7d6386;
    color: #fdfcfb;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    outline: none;
    @media screen and (min-width: 900px) {
      padding: 1rem 4rem;
      border-radius: 1.5rem;
      cursor: pointer;
    }
  }
`;
