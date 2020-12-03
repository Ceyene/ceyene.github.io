//dependencies
import styled from "styled-components";
//global styles
import { FlexSection, StyledSecondaryTitle, Button } from "../../globalStyles";

export const StyledContact = styled(FlexSection)`
  ${FlexSection}
  flex-direction: column;
  padding: 2.25rem 1rem;
`;

export const ContactTitle = styled(StyledSecondaryTitle)`
  text-align: center;
  padding-bottom: 3.5rem;
  ${StyledSecondaryTitle}
`;

export const ContactButton = styled(Button)`
  color: #e04064;
  border-color: #e04064;
  ${Button}
`;
