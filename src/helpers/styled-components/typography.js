import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

//mixins used in typography - sets the color of font and background colors depending on the theme
import {fontColor,backgroundColor} from "./mixins/themeColor";

//typography animations
const typingEffect = keyframes`
    from {width: 0;}
    to {width: 100%;}
`;
const blinkCaret = keyframes`
    from,to {border-color: transparent;}
    50% {border-color: var(--color-neutral-800);}
`;

//base styling for all paragraph tags on site
const Type = styled.p`
    color: ${fontColor};
`;

//adding some styling to the react router Link component
export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: ${fontColor};    
    padding: .75em;
    margin-top: 16px;
    background-color: ${backgroundColor};
    font-size: 2rem;
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
    @media (max-width: 480px) {
        background-color: transparent;
    }
`;

//strictly for header title
export const HeaderTitle = styled(Type)`
    margin: 0;
    text-align: center;
`;

//strictly for header subtitle
export const HeaderPar = styled(Type)`
    font-size: var(--font-size-small);
    margin: 0 auto;
    border-right: 0.15em solid transparent;
    letter-spacing: 0.15em;
    white-space: nowrap;
    overflow: hidden;
    animation: ${blinkCaret} .7s step-end 8, ${typingEffect} 3.6s steps(25, end);
    @media (max-width: 480px) {
        animation: none
        text-align: center;
    }
`;

//to be used as post title component
export const PostTitle = styled(Type)`
    font-size: var(--font-size-xxlarge);
    text-align: center;
    text-decoration: underline;
`;

export const PostSectionHeader = styled(Type)`
    font-size: var(--font-size-xlarge);
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: 2px solid ${fontColor};
    border-bottom: 2px solid ${fontColor};
`;

//to be used as post body paragraph component
export const PostPar = styled(Type)`
    font-size: var(--font-size-large);
    line-height: 1.5;
    text-decoration: ${({underline}) => underline && 'underline'};
`;


export const StyledAnchor = styled.a`
    color: ${fontColor};
    text-decoration: none;
    font-size: var(--font-size-xsmall);
    display: block;
`;