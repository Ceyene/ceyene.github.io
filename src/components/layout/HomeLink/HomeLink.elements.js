//dependencies
import styled from "styled-components";

export const StyledHomeLink = styled.div`
  border: 0.1rem solid #7d6386;
  display: inline-block;
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  border-radius: 1rem;

  @media screen and (min-width: 900px) {
    &:hover {
      background: linear-gradient(to right, #e8cbc0, #7d6386);
      border-color: #ffffff;
      a {
        color: #ffffff;
      }
    }
  }

  a {
    padding: 1rem 2.5rem;
    margin-top: 1.5rem;
    color: #7d6386;
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
