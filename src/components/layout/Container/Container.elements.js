//dependencies
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 15vh);
  border-top: 0.01rem solid #83031b;
  border-right: 0.17rem solid #83031b;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 85vw;
    max-width: 75rem;
    padding: 0.5rem;
  }
`;
