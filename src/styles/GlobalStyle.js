import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-family: "Lexend Deca", sans-serif;
    }

    button, input[type="submit"] {
        cursor: pointer;
    }
`;

export default GlobalStyle;
