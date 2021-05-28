//dependencies
import styled from "styled-components";
import { StyledSmallText } from "../../styles/globalStyles";

export const StyledFooter = styled.footer`
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1rem;
`;

export const StyledFooterText = styled(StyledSmallText)`
  color: #000000;
  ${StyledSmallText}
`;
