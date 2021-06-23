import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #000000;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* Footer in /contact is different */
  padding-top: ${({ contactpage }) => {
    if (contactpage) return "4em";
    else return "23em";
  }};
`;

export const StyledNonMobileContainer = styled.div`
  @media (min-width: 724px) {
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 5em;
    height: 11em;
    position: relative;
  }

  @media (min-width: 1024px) {
    width: 80vw;
  }
`;

export const StyledLogo = styled.div`
  img {
    width: 202px;
  }

  @media (min-width: 724px) {
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
export const HorizontalLine = styled.div`
  border: 1px solid #ffffff;
  width: 90%;
  margin: 1em auto;
  opacity: 0.1;

  @media (min-width: 724px) {
    margin-top: 4em;
    width: 100%;
  }
`;

export const StyledNavigation = styled.nav`
  ul li {
    color: #ffffff;
    font-size: 0.875em;
    text-transform: uppercase;
    letter-spacing: 0.125em;
    padding: 1em;
  }

  ul li:hover,
  ul li:focus {
    text-decoration: underline;
  }

  @media (min-width: 724px) {
    position: absolute;
    top: 0;
    right: 0;

    ul {
      display: flex;
      width: 370px;
      justify-content: space-between;
    }

    ul li {
      padding: 0;
    }
  }
`;

export const StyledContactInformation = styled.div`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;

  div:first-of-type {
    margin-top: 1em;
  }

  div:nth-of-type(2) {
    margin-top: 2.5em;
  }

  @media (min-width: 724px) {
    position: absolute;
    bottom: 0;
    text-align: left;
    display: flex;
    width: 100%;
    justify-content: space-between;

    div:first-of-type,
    div:nth-of-type(2) {
      margin: 0;
    }
  }

  @media (min-width: 1024px) {
    div:nth-of-type(2) {
      position: absolute;
      left: 360px;
    }
  }
`;

export const StyledSocialMediaButtons = styled.div`
  ul {
    margin: 2.5em 0;
    display: flex;
    lex-direction: row;
    justify-content: center;
  }

  ul li {
    margin: 0 0.5em;
  }

  ul li:hover,
  ul li:focus {
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(82%) sepia(17%) saturate(2053%)
      hue-rotate(304deg) brightness(112%) contrast(101%);
  }

  @media (min-width: 724px) {
    ul {
      margin-bottom: 0;
      margin-top: 3em;
    }
  }
`;
