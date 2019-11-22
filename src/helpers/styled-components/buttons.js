import styled from 'styled-components';
import {animated} from 'react-spring';

import { fontColor, borderColor, componentBackgroundColor as backgroundColor} from './mixins/themeColor';
import {fontSize} from './mixins/typography';
import {blockWidth,boxShadow} from './mixins/content';

const dangerFontColor = ({ theme: { theme } }) => theme === 'light' ? 'var(--color-danger-800)' : 'var(--color-neutral-0)';
const dangerBackgroundColor = ({ theme: { theme } }) => theme === 'light' ? 'var(--color-neutral-0)' : 'var(--color-danger-1000)';

export const Button = styled.button`
    padding: 1em;
    border-radius: 0;
    font-size: ${fontSize};
    width: ${blockWidth};
    box-sizing: border-box;
    border: 2px solid transparent;
    margin: ${({block})=>block&&'8px 0'||'8px'};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 0 0 0 0 transparent;
    font-family: 'Raleway', serif;
    transition: box-shadow 0.3s, transform 0.3s, background-color 0.3s;
    outline: none;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👆</text></svg>") 16 0,auto;

    &:hover,
    &:hover:focus,
    &:active {
        box-shadow: ${boxShadow};
    }

    &:hover {
        transform: scale(1.02);
    }

    &:active,
    &:hover:active {
        transform: scale(1);
        box-shadow: 0 0 0 0 transparent;
    }

`;

export const PrimaryButton = styled(Button) `
    background-color: ${backgroundColor};
    color: ${fontColor};
    border: 3px solid ${borderColor};
    &:hover {
        background-color: ${backgroundColor};
    }
`;

export const AnimatedPrimaryButton = animated(PrimaryButton);

export const DangerButton = styled(Button)`
    background-color: ${dangerBackgroundColor};
    color: ${dangerFontColor};
    &:hover,
    &:hover:focus {
        background-color: ${dangerBackgroundColor};
        transform: none;
        box-shadow: none;
    }
    @media (max-width: 700px) {
        font-size: var(--font-size-base);
    }
`;

export const IconButton = styled(PrimaryButton)`
    position: relative;

    align-self: stretch;

    color: ${fontColor};
    font-size: var(--font-size-large);

    &:before {
        content: ${({ icon }) => icon && `'${icon}'`};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`;