import styled, {keyframes} from "styled-components";

const fadeOut = keyframes`
    from {opacity: 1;}
    to {opacity: 0;}
`;

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const BackgroundImg = styled.img`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    object-fit: cover;
`;

export const BackgroundImg1 = styled(BackgroundImg)`
    z-index: -1;
    animation-name: ${({fade}) => fade && fadeOut};
    animation-fill-mode: forwards;
    animation-duration: 3s;
    animation-iteration-count: 1;
`;

export const BackgroundImg2 = styled(BackgroundImg)`
    z-index: -2;
`;
