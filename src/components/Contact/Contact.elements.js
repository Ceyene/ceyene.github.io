//dependencies
import styled from "styled-components";
//global styles
import { FlexSection, StyledSecondaryTitle, Button } from "../../globalStyles";
//styled icons
import { LinkedinSquare } from "@styled-icons/boxicons-logos/";
import { Email } from "@styled-icons/material-outlined/";

export const StyledContact = styled(FlexSection)`
  flex-direction: column;
  padding: 2.25rem 1rem;
  ${FlexSection}
`;

export const ContactTitle = styled(StyledSecondaryTitle)`
  text-align: center;
  padding-bottom: 1rem;
  ${StyledSecondaryTitle}
`;

export const ContactButton = styled(Button)`
  color: #e04064;
  border-color: #e04064;
  ${Button}
`;

export const LinkedInIcon = styled(LinkedinSquare)`
  margin: 1rem;
  color: #060a24;
  text-align: center;
  font-size: 1.5rem;
`;

export const EmailIcon = styled(Email)`
  margin: 1rem;
  color: #060a24;
  text-align: center;
  font-size: 1.5rem;
`;
