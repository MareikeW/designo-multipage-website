import styled from "styled-components";
import express from "../../assets/web-design/desktop/image-express.jpg";
import transfer from "../../assets/web-design/desktop/image-transfer.jpg";
import photon from "../../assets/web-design/desktop/image-photon.jpg";
import builder from "../../assets/web-design/desktop/image-builder.jpg";
import blogr from "../../assets/web-design/desktop/image-blogr.jpg";
import camp from "../../assets/web-design/desktop/image-camp.jpg";

export const StyledProjectCaseCard = styled.div`
    margin: 2em;
    text-align: center;
    border-radius: 1em;
    background-color: #FDF3F0;

    h3 {
        color: #E7816B;
        margin-bottom: 0;
    }

    p {
        padding: 0 2em 2em 2em;
    }
`

export const StyledProjectImage = styled.div`
    background-image: ${({background}) => {
        if (background === "Express") return `url(${express})`;
        else if (background === "Transfer") return `url(${transfer})`;
        else if (background === "Photon") return `url(${photon})`;
        else if (background === "Builder") return `url(${builder})`;
        else if (background === "Blogr") return `url(${blogr})`;
        else if (background === "Camp") return `url(${camp})`;
    }};
    background-repeat: no-repeat;
    height: 320px;
    width: 100%;
    background-size: cover;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
`

