//dependencies
import React from "react";
import { Link } from "react-router-dom";
//styled components
import {
  StyledLink,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
} from "./NotFound.elements";

//it renders a "not found" notification page
const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Page Not Found</NotFoundText>
      <StyledLink>
        <Link to="/">Back to Homepage</Link>
      </StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
