import styled from "styled-components";

import {fontColor, borderColor, componentBackgroundColor as backgroundColor} from "./mixins/themeColor";

export const SearchInput = styled.input`
    width: 80%;
    font-size: var(--font-size-xlarge);
    outline: none;
    border: 3px solid ${borderColor};
    background-color: ${backgroundColor};
    padding: 16px;
    display: block;
    margin: auto;
    text-align: center;
    @media (max-width: 700px) {
        padding: 8px;
        font-size: var(--font-size-base);
    }
    &,
    ::placeholder {
        color: ${fontColor}; 
    }
`;