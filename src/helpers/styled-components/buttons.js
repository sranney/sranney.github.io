import styled from "styled-components";

import {fontColor} from "./mixins/themeColor";
import {fontSize} from "./mixins/typography";
import {blockWidth,boxShadow} from "./mixins/content";

const borderColor = ({ theme: { theme } }) => theme === 'dark' ? 'var(--color-neutral-0)' : 'var(--color-primary-800)';
const backgroundColor = ({ theme: { theme } }) => theme === 'dark' ? 'var(--color-primary-800)' : 'var(--color-neutral-0)';

export const Button = styled.button`
    padding: 1em;
    border-radius: 0;
    font-size: ${fontSize};
    width: ${blockWidth};
    border: 2px solid transparent;
    margin: 8px;
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