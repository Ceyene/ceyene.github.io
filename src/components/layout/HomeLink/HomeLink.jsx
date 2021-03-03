//dependencies
import React from "react";
import { Link } from "react-router-dom";
//components
import { StyledHomeLink } from "./HomeLink.elements";

const HomeLink = () => {
  return (
    <StyledHomeLink>
      <Link to="/">Back to Homepage</Link>
    </StyledHomeLink>
  );
};

export default HomeLink;
