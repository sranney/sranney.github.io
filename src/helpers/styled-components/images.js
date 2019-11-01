//lazy loading requires that this is in a separate file
import styled from "styled-components";

export const BackgroundImage = styled.img`
    position: fixed;
    z-index: -1;
    height: 100vh;
    top: 0;
    left: 0;
    width: 100vw;
    display: block;
    object-fit: cover;
`;

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 600px;
    margin-left: auto;
    margin-right: auto;
`;