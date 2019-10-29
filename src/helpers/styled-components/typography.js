import styled from "styled-components";

export const BodyPar = styled.p`
    font-size: $font-size-large;
    color: ${props => props.theme === 'light' ? "red" : "blue"};
`;