import styled from "styled-components";

export const StyledLocationCard = styled.div`
    text-align: center;
    margin: 8em auto;
    position: relative;

    .circle {
        position: absolute;
    }

    h3 {
        padding-top: 1.5em;
        padding-bottom: 1.5em;
    }

    button {
        background-color: #E7816B;
        border-radius: 0.5em;
        border: none;
        color: #FFFFFF;
        padding: 1.15em 1.2em;
    }

    button:hover,
    button:focus {
        background-color: #FFAD9B;
        color: #FFFFFF;
    }
`