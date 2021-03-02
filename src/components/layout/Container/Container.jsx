//dependencies
import React from "react";
//styles
import { StyledContainer } from "./Container.elements";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
