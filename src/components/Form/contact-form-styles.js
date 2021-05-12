import styled from "styled-components";

export const StyledContactForm = styled.div`
    background-color: #E7816B;
    text-align: center;
    color: #FFFFFF;
    padding: 0 1.5em;
    

    h1 {
        font-size: 2rem;
        padding-top: 2em;
    }

    p {
        font-size: 1rem;
        padding-top: 1.5em;
        padding-bottom: 3em;
    }

    form div {
        display: flex;
        flex-direction: column;
    }

    input[type=submit] {
        background-color: #FFFFFF;
        border-radius: 0.5em;
        border: none;
        padding: 1.15em 3.15em;
        text-transform: uppercase;
        margin-bottom: 4.5em;   
    } 

    input[type=submit]:hover,
    input[type=submit]:focus {
        background-color: #FFAD9B;
        color: #FFFFFF;
    }

    @media (min-width: 724px) {
        border-radius: 1rem;
        width: 689px;
        margin: 0 auto;
        text-align: left;
        padding: 4.437em 3.625em 8.8em 3.625em;

        h1 {
            padding: 0;
            font-size: 3rem;
            line-height: 3rem;
        }

        input[type=submit] {
            margin: 0;
            float: right;
        }
    }

    @media (min-width: 1024px) {
        display: flex;
        width: 800px;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 4.437em;

        div {
            width: 300px;
        }
    }

    @media (min-width: 1150px) {
        width: 1110px;

        div {
            width: 445px;
        }
    }
`

export const FormInputFields = styled.div`
    .input-error {
        position: relative;
    } 

    .name-error-text,
    .error-text {
        display: block;
        position: absolute;
        right: 3em;
        top: 1em;
        font-size: 0.75em;  
    }

    .name-error-icon,
    .error-icon {
        display: block;
        position: absolute;
        top: 1em;
        right: 0.5em;
    }

    input,
    textarea {
        border: none;
        background: none;   
        padding: 1em;
        margin-bottom: 1.5em;
        outline: none;
        position: relative;
    }

    .filledInput {
        color: #FFFFFF;
        border-bottom 3px solid #FFFFFF;
    }

    .emptyInput {
        border-bottom: 1px solid #FFFFFF;
    }

    textarea {
        padding-bottom: 4.75em;
        margin-bottom: 2.5em;
        border-bottom: 1px solid #FFFFFF;
    }

    input::placeholder,
    textarea::placeholder {
        color: #FFFFFF;
        opacity: 0.5;
    }
`