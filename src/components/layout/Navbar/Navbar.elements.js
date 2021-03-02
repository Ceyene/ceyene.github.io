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
    width: 10rem;
    border-top: 0.01rem solid #7d6386;
    border-right: 0.13rem solid #7d6386;
    border-top-right-radius: 0.5rem;
    background-color: #ffffff;
    text-align: center;
    margin: 0;

    &:hover {
      border-color: #ffffff;
      background-color: #ccb0c2;
      color: #ffffff;
    }
  }
`;

export const StyledNavA = styled.span`
  a {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 2.2rem;
    color: #7d638681;

    &::active {
      color: #7d6386;
    }

    @media screen and (min-width: 768px) {
      font-size: 0.813rem;
      color: #7d6386;

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
