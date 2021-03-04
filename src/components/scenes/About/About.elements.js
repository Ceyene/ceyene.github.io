//dependencies
import styled from "styled-components";
//global styles
import { StyledText } from "../../styles/globalStyles";

export const StyledAbout = styled.article`
  padding: 2.5rem;

  @media screen and (min-width: 900px) {
    padding: 2.5rem 15%;
  }
`;

export const AboutText = styled(StyledText)`
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: left;
  text-transform: none;
  ${StyledText}
`;

export const StyledKnowledge = styled.div`
  padding: 1rem;
  height: 230px;
  width: 230px;
  border-top: 0.01rem solid #7d6386;
  border-right: 0.13rem solid #7d6386;
  border-radius: 0.5rem;
  box-shadow: 0.625rem 0.625rem 0.313rem 0rem rgba(227, 220, 227, 0.68);
  margin: 0.5rem 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KnowledgeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

export const KnowledgeTech = styled.div`
  text-align: center;
`;
