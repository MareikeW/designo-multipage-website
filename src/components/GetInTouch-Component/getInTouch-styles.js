import styled from "styled-components";

export const ContainerPosition = styled.div`
    position: relative;
    height: 250px;
`

export const StyledGetInTouchContainer = styled.div`
    max-width: 600px;
    background-color: #E7816B;
    border-radius: 0.5rem;
    color: #FFFFFF;
    text-align: center;
    padding: 4em 1.5em;
    position: absolute;
    top: 100%;
    left: 50%;
    transform:translate(-50%, -50%);

    h2 {
        font-size: 2rem;
        line-height: 2.25rem;
        letter-spacing: 0;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-top: 1em;
        margin-bottom: 2em;
    }

    button {
        background-color: #FFFFFF;
        border-radius: 0.5rem;
        border: none;
        padding: 1.15em 1.2em;
        margin: 1em;
    }

    button:hover,
    button:focus {
        background-color: #FFAD9B;
        color: #FFFFFF;
    }

    @media (min-width: 700px) {
        width: 690px;
        padding: 3.56em 1.5em;

        h2 {
            font-size: 2.5rem;
            line-height: 2.5rem;
        }

        p {
            line-height: 1.63rem;
            margin-top: 3.5em;
            padding: 0 3em;
        }
    }
`