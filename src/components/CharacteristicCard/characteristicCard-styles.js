import styled from "styled-components";

export const StyledCharacteristicCard = styled.div`
    text-align: center;
    padding: 0 1em;
    margin-bottom: 5em;
    position: relative;

    &:first-of-type {
        margin-top: 8em;
    }

    .circle {
        position: absolute;
    }

    @media (min-width: 700px) {
        display: flex;
        justify-content: space-between;
        max-width: 690px;
        margin: 0 auto 5em auto;
    }

    @media (min-width: 750px) {
        padding: 0;
    }
`

export const StyledTextContainer = styled.div`
    h3 {
        margin-top: 2em;
    }

    p {
        margin-top: 1em;
    }

    @media (min-width: 700px) {
        width: 27.44em;
        text-align: left;
    }
`