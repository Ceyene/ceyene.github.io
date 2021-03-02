//dependencies
import React from "react";
//components
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";
//styles
import GlobalStyle from "../styles/globalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
