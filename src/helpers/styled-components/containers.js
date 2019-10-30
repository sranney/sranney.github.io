import styled from "styled-components";
import {backgroundColor} from "./mixins/themeColor";
import {boxShadow} from "./mixins/content";


export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderContainer = styled(FlexWrapper)`
    padding: 0 16px;
    z-index: 100000000;
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
    }
`;