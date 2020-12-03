import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

body {
    background-color: $back-color;
    color: $darker-color;
    font-family: $main-font;
    font-size: 16px;
}

a {
    text-decoration: none;
    color: $darker-color;
}

const StyledMainTitle = styled.h1``;

const StyledSecondaryTitle = 
h1,
h2,
h3 {
    font-weight: 600;
}

ul {
    list-style: none;
}


