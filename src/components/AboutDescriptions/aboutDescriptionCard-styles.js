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

    .desktopVersion {
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

    @media (min-width: 1150px) {
        display: flex;
        width: 1111px;
        text-align: left;
        height: 640px;
        flex-direction: ${({desktopImage}) => {
            if (desktopImage === "deal") return "row-reverse";
        }};

        h2 {
            padding: 0;
        }

        p {
            padding: 0;
        }

        div {
            width: 445px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: ${({desktopImage}) => {
                if (desktopImage === "talent") return "5.9em";
            }};
            margin-right: ${({desktopImage}) => {
                if (desktopImage === "deal") return "5.9em";
            }};
        }

        .tabletVersion {
            display: none;
        }

        .desktopVersion {
            display: block;
            border-top-left-radius: ${({desktopImage}) => {
                if (desktopImage === "talent") return "1em";
            }};
            border-bottom-left-radius: ${({desktopImage}) => {
                if (desktopImage === "talent") return "1em";
            }};
            border-top-right-radius: ${({desktopImage}) => {
                if (desktopImage === "deal") return "1em";
            }};
            border-bottom-right-radius: ${({desktopImage}) => {
                if (desktopImage === "deal") return "1em";
            }};
        }      
    }
`