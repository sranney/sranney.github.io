import styled from "styled-components";

export const BodyPar = styled.p`
    font-size: 1.25rem;
    color: ${({theme}) => theme === 'light' ? "var(--color-primary-800)" : "var(--color-neutral-0)"};
`;