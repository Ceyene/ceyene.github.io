//dependencies
import styled from "styled-components";
//global styles
import { FlexDiv, RoundImg } from "../../styles/globalStyles";

export const StyledHero = styled(FlexDiv)`
  height: 40vh;
  width: 100%;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
  @media screen and (min-width: 900px) {
    height: 85vh;
  }
  ${FlexDiv}
`;

export const StyledHeader = styled.header`
  text-align: center;
  animation-duration: 2s;
  -webkit-animation-duration: 2s;
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
  animation-name: fadeInRight;
  -webkit-animation-name: fadeInRight;

  @keyframes fadeInRight {
    from {
      -webkit-transform: translate3d(25%, 0, 0);
      transform: translate3d(25%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  animation-duration: 2s;
  -webkit-animation-duration: 2s;
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
  animation-name: fadeInLeft;
  -webkit-animation-name: fadeInLeft;

  @keyframes fadeInLeft {
    from {
      -webkit-transform: translate3d(-25%, 0, 0);
      transform: translate3d(-25%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const StyledHeaderImg = styled(RoundImg)`
  width: 50vw;
  max-width: 250px;
  margin-bottom: 2rem;
  ${RoundImg}

  @media screen and (min-width: 768px) {
    width: 23vw;
    margin: 1.5rem 0;
  }
`;

export const StyledLogo = styled(RoundImg)`
  width: 4.375rem;
  position: absolute;
  bottom: 2.563rem;
  right: 0.563rem;

  @media screen and (min-width: 768px) {
    bottom: 1.563rem;
    right: 1.563rem;
  }
  ${RoundImg}
`;
