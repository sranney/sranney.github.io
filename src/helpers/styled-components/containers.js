import styled from "styled-components";
import {backgroundColor, borderColor} from "./mixins/themeColor";
import {boxShadow} from "./mixins/content";
import { TwitterTweetEmbed } from 'react-twitter-embed'; 


export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FlexWrapper = styled(FlexContainer)`
    flex-basis: 30%;
    flex-wrap: wrap;
`;

export const CenteredContentWrapper = styled.div`
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
`;

export const CenteredBlockContentWrapper = styled.div`
    margin: 16px auto;
`;

export const OverflowHiddenWrapper = styled.div`
    overflow: hidden;
    width: 100vh
`;

export const HeaderContainer = styled(FlexContainer)`
    padding: 0 16px;
    z-index: 100000000;
    
    @media (max-width: 480px) {
        background-color: ${backgroundColor};
        display: block;
        width:100%;
        padding: 0;
    }
`;

export const BtnNav = styled(FlexContainer)`
    max-width: 800px;
    @media (max-width: 480px) {
        justify-content: center;
    }
`;

export const SectionBtnNav = styled(BtnNav)`
    margin-left: auto;
    margin-right: auto;
`;

const PostGeneral = styled.div`
    max-width: 800px;
    margin: 32px auto;
    padding: 16px 32px;
    background-color: ${backgroundColor};
    box-shadow: ${boxShadow};
`;

export const PostBody = styled(PostGeneral)`
    @media(max-width: 800px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
    }
    @media(max-width: 480px) {
        margin-top: 0;
    }
`;

export const PostCard = styled(PostGeneral)`
    width: 30%;
    padding: 50px 25px 75px;
    text-align: center;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    @media(max-width: 800px) {
        min-height: 0;
        width: 100%;
        margin: 12px 0 0 0;
    }
`;

export const PostSearch = styled(PostBody)`
    padding: 32px;
`;

export const TwitterQuote = styled(TwitterTweetEmbed)`
    margin-left: auto;
    margin-right: auto;
`;