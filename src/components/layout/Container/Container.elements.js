//dependencies
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 15vh);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    width: 85vw;
    max-width: 75rem;
    padding: 0.5rem;
  }
`;
