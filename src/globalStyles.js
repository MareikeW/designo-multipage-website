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
        color: #FFFFFF;
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
        cursor: pointer;
        font-family: 'Jost', sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 21.68px;
        letter-spacing: 1px;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;