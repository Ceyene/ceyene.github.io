//dependencies
import styled from "styled-components";

export const StyledHome = styled.section`
  width: 95vw;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;
