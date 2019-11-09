import styled from 'styled-components';

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
    border: 2px solid transparent;
    margin: ${({block})=>block&&'8px 0'||'8px'};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 0 0 0 0 transparent;
    font-family: 'Raleway', serif;
    transition: box-shadow 0.3s, transform 0.3s, background-color 0.3s;
    outline: none;

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

export const ThemeButton = styled(PrimaryButton)`
    position: relative;

    align-self: stretch;

    &:before {
        content: ${({ theme: { theme } }) => theme === 'light' ? `'☀️'` : `'🌙'`};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`;