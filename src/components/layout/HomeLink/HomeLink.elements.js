//dependencies
import styled from "styled-components";

export const StyledHomeLink = styled.div`
  border: 0.15rem solid transparent;
  border-radius: 1.5rem;
  background-image: linear-gradient(19deg, #00f59b 0%, #30bfa5 100%);
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;

  @media screen and (min-width: 900px) {
    &:hover {
      background-image: linear-gradient(190deg, #00f59b 0%, #30bfa5 100%);
    }
  }

  a {
    padding: 1rem 2.5rem;
    margin-top: 1.5rem;
    color: rgba(0, 0, 0, 0.95);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
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
