//dependencies
import styled from "styled-components";
//global styles
import { StyledText } from "../../styles/globalStyles";

export const StyledAbout = styled.article`
  padding: 2.5rem;

  @media screen and (min-width: 900px) {
    padding: 2.5rem 5%;
  }
`;

export const AboutText = styled(StyledText)`
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: justify;
  text-transform: none;
  ${StyledText}
`;

export const StyledKnowledge = styled.div`
  padding: 1rem 0.5rem;
  height: 8.125rem;
  width: 14.375rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-top: 0.01rem solid #e0c3fc;
  border-right: 0.13rem solid #e0c3fc;
  border-radius: 0.5rem;
  box-shadow: 0.625rem 0.625rem 0.313rem 0rem rgba(0, 0, 0, 0.35);
  margin: 1rem 1.5rem;
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
