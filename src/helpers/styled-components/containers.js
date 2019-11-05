import styled from "styled-components";
import {backgroundColor} from "./mixins/themeColor";
import {boxShadow} from "./mixins/content";


export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OverflowHiddenWrapper = styled.div`
    overflow: hidden;
    width: 100vh
`;

export const HeaderContainer = styled(FlexWrapper)`
    padding: 0 16px;
    z-index: 100000000;
    
    @media (max-width: 480px) {
        background-color: ${backgroundColor};
        display: block;
        width:100%;
        padding: 0;
    }
`;

export const BtnNav = styled(FlexWrapper)`
    @media (max-width: 480px) {
        justify-content: center;
    }
`;

export const PostBody = styled.div`
    max-width: 800px;
    margin: 32px auto;
    padding: 16px 32px;
    background-color: ${backgroundColor};
    box-shadow: ${boxShadow};
    @media(max-width: 800px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
    }
    @media(max-width: 480px) {
        margin-top: 0;
    }
`;
