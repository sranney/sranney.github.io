import styled from 'styled-components';
import { animated } from 'react-spring';

import { backgroundColor, borderColor, fontColor, componentBackgroundColor, overlayBackgroundColor} from './mixins/themeColor';
import {fontSize} from './mixins/typography';
import {boxShadow} from './mixins/content';
import { TwitterTweetEmbed } from 'react-twitter-embed'; 
import SwipeableViews from 'react-swipeable-views';

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
    margin: 32px auto;
`;

const PostGeneral = styled.div`
    max-width: 800px;
    margin: 32px auto;
    padding: 16px 32px;
    background-color: ${backgroundColor};
    box-shadow: ${boxShadow};
`;

export const PostBody = styled(PostGeneral)`
    position: relative;
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

export const SlideInViewContainer = styled(CenteredContentWrapper)`
    min-height: 100px;
    display: flex;
    margin-top: 24px;

    @media (max-width: 800px) {
        display: block;
    }

    div {
        position: relative;
        width: 50%;
        @media (max-width: 800px) {
            width: 100%;
        }
    }

    span {
        position: relative;
        display: block;
        opacity: ${({inview}) => inview ? '1' : '0'};
        left: ${({inview}) => inview ? '0%' : '10%'};
        transition: left 0.3s, opacity 0.5s;
        text-align: left;
        color: ${fontColor};
    }

    .primary {
        transition-delay: 0.3s;
        font-size: var(--font-size-xxlarge);
        @media (max-width: 800px) {
            transition-delay: 0.1s;
        }
    }
    
    .secondary {
        transition-delay: 0.6s;
        text-decoration: underline;
        @media (max-width: 800px) {
            transition-delay: 0.2s;
        }
    }

    .tertiary {
        transition-delay: 0.9s;
        @media (max-width: 800px) {
            transition-delay: 0.3s;
        }
    }

    .reference {
        transition-delay: 1.2s;
        margin-top: 12px;
        @media (max-width: 800px) {
            display: none;
        }
    }
`;

export const StyledSwipeableViews = styled(SwipeableViews)`
    margin: 40px auto;
    height: 40px;
    width: 100%;
    border-top: 3px solid ${borderColor};
    border-bottom: 3px solid ${borderColor};
    div {
        height: 40px;
        background-color: ${componentBackgroundColor};
        color: ${fontColor};
        text-align: center;
        font-size: var(--font-size-xxlarge);
        
    }
`;

export const StyledModal = animated(styled.div`
    box-sizing: border-box;
    padding: 48px;
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    top: 0;
    left: 0;
    background-color: ${overlayBackgroundColor};
`);

export const AboutContainer = styled.div`
    width: calc(300vw);
    transition: left 1s;
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    left: ${({left})=>`-${left*101+1}vw`};
    position: relative;

    > div {
        width: 100vw;
        box-sizing: border-box;
    }
`;

const Expandable = styled.div`
    color: ${fontColor};
`;

export const ExpandableHeader = styled(Expandable)`
    font-size: ${fontSize};
    position: relative;
`;

export const ExpandableBody = animated(styled(Expandable)`
    overflow-y: hidden;
    background-color: ${overlayBackgroundColor};    
`);