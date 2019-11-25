import styled from 'styled-components';

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const BackgroundImg = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    object-fit: cover;
    background-image: url('${({ src }) => src}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
`;