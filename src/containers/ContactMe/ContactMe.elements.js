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
  color: #000000;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border: 0.15rem solid transparent;
  border-radius: 1.5rem;
  padding: 1.1rem 1.5rem;
  margin: 0.5rem;
  box-shadow: 0.325rem 0.325rem 0.313rem 0rem rgba(0, 0, 0, 0.15);

  svg {
    fill: rgba(0, 0, 0, 0.75);
    width: 2.5rem;
  }

  @media screen and (min-width: 900px) {
    &:hover {
      background-image: linear-gradient(162deg, #8ec5fc 0%, #e0c3fc 100%);
    }
  }
`;
