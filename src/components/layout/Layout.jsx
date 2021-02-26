//dependencies
import React from "react";
//components
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";
//styles
import GlobalStyle from "./globalStyles";

const Layout = (props) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
