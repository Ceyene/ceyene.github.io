//dependencies
import styled from "styled-components";
//styled icons
import { UniversalAccess } from "@styled-icons/fa-solid/";
import {
  ReactLogo,
  Html5,
  Css3,
  Javascript,
  Git,
} from "@styled-icons/boxicons-logos/";

export const StyledKnowledge = styled.section`
  padding: 1rem;
`;

export const KnowledgeContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
`;

export const KnowledgeTech = styled.div`
  width: 25%;
  margin: 1rem;
  padding: 1rem;
`;

export const A11yIcon = styled(UniversalAccess)`
  margin: 1rem;
  color: #e04064;
  text-align: center;
  font-size: 2.5rem;
`;
export const ReactIcon = styled(ReactLogo)`
  margin: 1rem;
  color: #e04064;
  text-align: center;
  font-size: 2.5rem;
`;
export const HtmlIcon = styled(Html5)`
  margin: 1rem;
  color: #e04064;
  text-align: center;
  font-size: 2.5rem;
`;
export const CssIcon = styled(Css3)`
  margin: 1rem;
  color: #e04064;
  text-align: center;
  font-size: 2.5rem;
`;
export const JsIcon = styled(Javascript)`
  margin: 1rem;
  color: #e04064;
  text-align: center;
  font-size: 2.5rem;
`;
export const GitIcon = styled(Git)`
  margin: 1rem;
  color: #e04064;
  text-align: center;
  font-size: 2.5rem;
`;
