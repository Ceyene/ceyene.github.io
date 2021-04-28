//dependencies
import styled from "styled-components";
//global styles
import { FlexDiv, StyledSection } from "../../components/styles/globalStyles";

export const StyledContact = styled(StyledSection)`
  min-height: calc(100vh - 15vh);
  padding-right: 5%;
  padding-left: 5%;
  ${StyledSection}
`;

export const SocialDiv = styled(FlexDiv)`
  margin: 3.5rem auto;
  width: 80%;
  justify-content: space-around;
`;

export const ContactButton = styled.a`
  border: 0.15rem solid #c5c52e;
  border-radius: 1.5rem;
  padding: 1.1rem 1.5rem;
  color: #c5c52e;

  svg {
    fill: #c5c52e;
    width: 2.5rem;
  }

  @media screen and (min-width: 900px) {
    &:hover {
      color: #ffffff;
      background-image: linear-gradient(
        109.5deg,
        rgba(197, 197, 46, 0.6) 11.2%,
        rgba(197, 197, 46, 0.849) 100.2%
      );
      border-color: #ffffff;

      svg {
        fill: #ffffff;
      }
    }
  }
`;
