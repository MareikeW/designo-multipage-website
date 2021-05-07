import { createGlobalStyle } from "styled-components";
/* font-family Jost 400 Regular und 500 Medium */
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        line-height: 26px;
        font-weight: 400;
        font-family: 'Jost', sans-serif;
        font-size: 16px;
    }

    h1 {
        font-size: 48px;
        line-height: 48px;
        font-weight: 500;
    }

    h2 {
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 2px;
        font-weight: 500;
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }

    button {
        text-transform: uppercase;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;