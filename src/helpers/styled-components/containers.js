import styled from 'styled-components';
import { animated } from 'react-spring';

import { backgroundColor, borderColor, fontColor, componentBackgroundColor, overlayBackgroundColor} from './mixins/themeColor';

import { TwitterTweetEmbed } from 'react-twitter-embed'; 
import SwipeableViews from 'react-swipeable-views';


export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FlexContainerStretch = styled(FlexContainer)`
    align-items: stretch;
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

export const SwipeableViewHOC = styled.div`
    margin: 40px auto;
`;
export const StyledSwipeableViews = styled(SwipeableViews)`
    border: 3px solid ${borderColor};
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='60' height='60' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>🤚</text></svg>") 16 0,auto;
    &:active {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='60' height='60' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>👊</text></svg>") 16 0,auto;
    }
    div {
        height: 100%;
        line-height: 1.5;
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

export const AnimatedBackgroundImageContainer = animated(styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
`);