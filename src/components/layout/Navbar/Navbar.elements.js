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
    border-top: 0.01rem solid #7d6386;
    border-right: 0.17rem solid #7d6386;
    border-top-right-radius: 0.5rem;
    background-color: #ffffff;
    box-shadow: inset -0.13rem 0.12rem rgba(0, 0, 0, 0.1);
    padding: 0.35rem;
    text-align: center;
    margin: 0;

    &:hover {
      border: none;
      background-color: #ccb0c2;
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
    color: #7d6386;
    display: block;
    width: 100%;

    svg {
      width: 2.7rem;
      margin-bottom: 0.5rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 0.836rem;
      color: #7d6386;

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
