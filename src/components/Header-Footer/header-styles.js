import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 96px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5em;
    position: relative;

    .checkButton {
        cursor: pointer;
        display: block;
        float: right;
    }

    #check {
        display: none;
    }

    ul {
        width: 100%;
        background: #000000;
        position: absolute;
        top: 96px;
        z-index: 40;
        padding: 2em 0;
        left: -100%;
        transition: all 0.8s;
    }

    ul li {
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: 1.5em;
        padding: 0.8em 1.5em;
    }

    ul li:hover,
    ul li:focus {
        text-decoration: underline;
    }

    #check:checked ~ ul {
        left: 0;
    }

    @media (min-width: 724px) {
        height: 155px;

        .checkButton {
            display: none;
        }

        ul {
            width: 370px;
            background: #FFFFFF;
            position: static;
            display: flex;
            padding: 2em 0;
            transition: none;
            justify-content: space-between;
        }
    
        ul li {
            color: #000000;
            font-size: 1em;
            padding: 0.8em 1em;
        }
    }

    @media (min-width: 1024px) {
        padding: 0 10em;
    }
`

export const StyledLogo = styled.div`
    img {
        width: 12.625em;
        float: left;
    }

`