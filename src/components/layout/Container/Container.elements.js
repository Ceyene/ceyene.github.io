//dependencies
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: transparent;
  border-top: 0.01rem solid #7d6386;
  border-right: 0.13rem solid #7d6386;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 85vw;
    max-width: 75rem;
    flex-direction: row;
    padding: 0.5rem;
  }
`;
