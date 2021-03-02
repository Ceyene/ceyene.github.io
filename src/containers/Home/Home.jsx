//dependencies
import React from "react";
//components
import HomeText from "../../components/scenes/Home/HomeText";
import HomeImg from "../../components/scenes/Home/HomeImg";
//styles
import { StyledHome } from "./HomeCont.elements.js";

const Home = () => {
  return (
    <StyledHome>
      <HomeText />
      <HomeImg />
    </StyledHome>
  );
};

export default Home;
