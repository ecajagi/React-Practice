import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

html, body {
    overflow-x:hidden;
}
`;
//we use the overflow to be hidden to prevent problems with animations

export default GlobalStyle;