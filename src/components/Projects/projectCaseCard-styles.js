import styled from "styled-components";
/* Projects in WebDesign */
import express from "../../assets/web-design/desktop/image-express.jpg";
import transfer from "../../assets/web-design/desktop/image-transfer.jpg";
import photon from "../../assets/web-design/desktop/image-photon.jpg";
import builder from "../../assets/web-design/desktop/image-builder.jpg";
import blogr from "../../assets/web-design/desktop/image-blogr.jpg";
import camp from "../../assets/web-design/desktop/image-camp.jpg";

/* Projects in AppDesign */
import airfilter from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../../assets/app-design/desktop/image-faceit.jpg";
import todo from "../../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../../assets/app-design/desktop/image-loopstudios.jpg";

/* Projects in GraphicDesign */
import timBrown from "../../assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../../assets/graphic-design/desktop/image-science.jpg";

export const StyledProjectCaseCard = styled.div`
    margin: 2em 1em;
    text-align: center;
    border-radius: 1em;
    background-color: #FDF3F0;

    h3 {
        color: #E7816B;
        margin-bottom: 0;
        margin-top: 2em;
    }

    p {
        padding: 1em 2em 2em 2em;
    }

    @media (min-width: 625px) {
        display: flex;
        max-width: 625px;
        margin: 2em auto;

        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center; 
        }
    }
`

export const StyledProjectImage = styled.div`
    background-image: ${({background}) => {
        /* Web Design Projects */
        if (background === "Express") return `url(${express})`;
        else if (background === "Transfer") return `url(${transfer})`;
        else if (background === "Photon") return `url(${photon})`;
        else if (background === "Builder") return `url(${builder})`;
        else if (background === "Blogr") return `url(${blogr})`;
        else if (background === "Camp") return `url(${camp})`;
        /* App Design Projects */
        else if (background === "Airfilter") return `url(${airfilter})`;
        else if (background === "Eyecam") return `url(${eyecam})`;
        else if (background === "Faceit") return `url(${faceit})`;
        else if (background === "Todo") return `url(${todo})`;
        else if (background === "Loopstudios") return `url(${loopstudios})`;
        /* Graphic Design Projects */
        else if (background === "Tim Brown") return `url(${timBrown})`;
        else if (background === "Boxed water") return `url(${boxedWater})`;
        else if (background === "Science!") return `url(${science})`
    }};
    background-repeat: no-repeat;
    height: 320px;
    width: 100%;
    background-size: cover;
    background-position: top;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;

    @media (min-width: 625px) {
        width: 50%;
        border-top-right-radius: 0;
        border-bottom-left-radius: 1em;
    }
`

