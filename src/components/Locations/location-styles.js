import styled from "styled-components";

export const StyledMap = styled.div`
    width: 100%;
    text-align: center;

    img {
        max-width: 100%;  
    }

    .imageMobileTablet {
        display: block;
    }

    .imageDesktop {
        display: none;
    }

    @media (min-width: 724px) {
        img {
            border-radius: 1rem;
            margin: 0 auto;
        }
    }

    @media (min-width: 1150px) {
        .imageMobileTablet {
            display: none;
        }

        .imageDesktop {
            display: block;
        }
    }
`

export const StyledLocationInfoCard = styled.div`
    text-align: center;
    background-color: #FDF3F0;
    margin-bottom: 3em;
    margin-top: -0.5em;

    h2 {
        margin: 0;
        color: #E7816B;
        padding-top: 5rem;
    }

    p {
        line-height: 1.56rem;
    }

    div {
        margin-top: 2em;
    }

    div:last-of-type {
        margin-top: 3em;
        padding-bottom: 5rem;
    }

    @media (min-width: 724px) {
        width: 689px;
        margin: 0 auto;
        border-radius: 1rem;
        margin-top: 1.9em;
        margin-bottom: 7.5em;
        position: relative;
        height: 326px;
        text-align: left;

        h2 {
            position: absolute;
            top: 5.5rem;
            left: 4.69rem;
            padding: 0;
        } 

        div:first-of-type {
            position: absolute;
            left: 4.69em;
            bottom: 5.5rem;
            margin: 0;
        }

        div:last-of-type {
            position: absolute;
            left: 22.5em;
            top: 10em;
            margin: 0;
        }
    }

    @media (min-width: 1150px) {
        width: 730px;
        height: 299px;
        margin: 0;

        h2 {
            top: 5.5rem;
            left: 5.9rem;
            padding: 0;
        } 

        div:first-of-type {
            left: 5.9em;
            bottom: 5.5rem;
            margin: 0;
        }

        div:last-of-type {
            left: 23.75em;
            top: 8.5em;
            margin: 0;
        }
`

export const StyledLocationsContainer = styled.div`
    @media (min-width: 1150px) {
        max-width: 1110px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        margin: 0 auto;
    }
`