//dependencies
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  max-width: 75rem;
  display: flex;
  justify-content: center;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 85vw;
  }
`;

export const StyledNavUl = styled.ul`
  display: flex;
  margin-top: 0.5rem;
`;

export const StyledNavLi = styled.li`
  margin: 0 1.5rem;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 11rem;
    border-top: 0.015rem solid transparent;
    border-right: 0.02rem solid transparent;
    border-bottom: none;
    border-left: 0.01rem solid transparent;
    border-top-right-radius: 0.5rem;
    background-image: linear-gradient(
      171.9deg,
      rgba(109, 25, 252, 1) 4%,
      rgba(125, 31, 165, 1) 56.1%
    );
    box-shadow: inset -0.03rem 0.01rem rgba(0, 0, 0, 0.5);
    padding: 0.35rem;
    text-align: center;
    margin: 0;

    &:hover {
      background-image: linear-gradient(
        135.9deg,
        rgba(109, 25, 252, 1) 4%,
        rgba(125, 31, 165, 1) 56.1%
      );
      color: #ffffff;

      a {
        color: #ffffff;
      }
    }
  }
`;

export const StyledNavA = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-transform: uppercase;
    letter-spacing: 0.135rem;
    color: rgba(109, 25, 252, 1);
    display: block;
    width: 100%;

    svg {
      width: 2.7rem;
      margin-bottom: 0.5rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 0.836rem;
      color: #e3e3e3;

      svg {
        width: 1.1rem;
        margin-right: 0.15rem;
        margin-bottom: 0;
      }

      &:hover {
        color: #ffffff;
      }
    }
  }
`;

export const DesktopMenu = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 0.5rem;
  }
`;
