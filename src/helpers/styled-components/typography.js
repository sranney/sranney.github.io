import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

//mixins used in typography - sets the color of font and background colors depending on the theme
import {fontColor,backgroundColor} from './mixins/themeColor';

import {fontSize} from './mixins/typography';

//typography animations
const typingEffect = keyframes`
    from {width: 0;}
    to {width: 100%;}
`;
const blinkCaretLight = keyframes`
    from,to {border-color: transparent;}
    50% {border-color: var(--color-neutral-800);}
`;
const blinkCaretDark = keyframes`
    from,to {border-color: transparent;}
    50% {border-color: var(--color-neutral-0);}
`;

const blinkCaretTheme = ({theme: {theme}}) => theme === 'light' ? blinkCaretLight : blinkCaretDark;

//base styling for all paragraph tags on site
const Type = styled.p`
    color: ${fontColor};
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
    animation: ${blinkCaretTheme} .7s step-end 8, ${typingEffect} 3.6s steps(25, end);
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

export const PostCaption = styled(Type)`
    font-size: var(--font-size-base);
    color: ${fontColor};
`;

export const StyledEm = styled.em`
    color: ${fontColor};
`;