import styled from "styled-components";

const buttonFontSize = ({size}) => {
    switch(size) {
        case 'small':
            return "0.875rem";
        case 'large':
            return "1.25rem";
        default:
            return "1rem";
    }
};

const buttonWidth = ({block}) => block && '100%';

export const Button = styled.button`
    padding: 1em;
    border-radius: 0;
    font-size: ${buttonFontSize};
    width: ${buttonWidth};
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
        box-shadow: 0 0 3px 1px var(--color-neutral-1000-alpha-5);
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
    background-color: ${({ theme: { theme } }) => theme === 'dark' ? 'var(--color-primary-800)' : 'var(--color-neutral-0)'};
    color: ${({ theme: { theme } }) => theme === 'dark' ? 'var(--color-neutral-0)' : 'var(--color-primary-800)'};
    border: 3px solid ${({ theme: { theme } }) => theme === 'dark' ? 'var(--color-neutral-0)' : 'var(--color-primary-800)'};
    &:hover {
        background-color: var(--color-primary-500);
    }
`;