import styled from "styled-components";

export const StyledAboutDescriptionCard = styled.div`
    margin: 0 auto;
    text-align: center;
    background-color: #FDF3F0;

    h2 {
        font-size: 2rem;
        color: #E7816B;
        margin-bottom: 0;
        letter-spacing: 0;
        padding-top: 2.5em;
    }

    p {
        font-size: 1rem;
        padding: 1.5em 1.5em 5em 1.5em;
        /* Turns "\n" into new line */
        white-space: pre-line;
    }
    
    img {
        max-height: 320px; 
        max-width: 100%;
    }
`