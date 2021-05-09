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
        left: 0;
        z-index: 40;
    }

    ul li {
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: 1.5em;
        padding: 0.8em 1.5em;
    }

    ul {
        padding: 2em 0;
        left: -100%;
        transition: all 0.8s;
    }

    #check:checked ~ ul {
        left: 0;
    }
`

export const StyledLogo = styled.div`
    img {
        width: 12.625em;
        float: left;
    }

`