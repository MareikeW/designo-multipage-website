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
    
    .mobileVersion {
        max-height: 320px; 
        max-width: 100%;
    }

    .tabletVersion {
        display: none;
    }

    @media (min-width: 724px) {
        width: 689px;
        border-radius: 1rem;
        margin-top: 7.5em;

        h2 {
            font-size: 2.5rem;
            line-height: 3rem;
            padding-top: 4.5rem;
        }

        p {
            padding: 1.5rem 3.5rem 4rem 3.5rem;          
        }

        .mobileVersion {
            display: none;
        }

        .tabletVersion {
            display: block;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }
    }
`