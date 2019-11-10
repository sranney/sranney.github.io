import React, {Fragment, useEffect, useState} from 'react';
import { useMediaPredicate } from 'react-media-hook';

import Biography from './about/Biography';
import Recommendations from './about/Recommendations';
import Portfolio from './about/Portfolio';

import { SectionBtnNav, StyledSwipeableViews, AboutContainer, PostBody } from '../helpers/styled-components/containers';
import { PrimaryButton } from '../helpers/styled-components/buttons';

export default function About() {
    const [left, setLeft] = useState(+window.localStorage.getItem('about-slide-position') || 0);
    const noGreaterThan600 = useMediaPredicate('(max-width: 600px)');

    useEffect(() => window.localStorage.setItem('about-slide-position',left),[left]);

    //for buttons
	const showBio = () => setLeft(0);
	const showPortf = () => setLeft(1);
    const showRecs = () => setLeft(2);
    
    //for swipeable
    const shift = index => setLeft(index);

    return (
        <Fragment>
            {
                !noGreaterThan600 //want to change view based on what the 
                ? (
                    <SectionBtnNav>
                        <PrimaryButton size={'small'} onClick={showBio}>Biography</PrimaryButton>
                        <PrimaryButton size={'small'}  onClick={showPortf}>Portfolio</PrimaryButton>
                        <PrimaryButton size={'small'}  onClick={showRecs}>Recommendations</PrimaryButton>
                    </SectionBtnNav>
                )
                : (
                    <StyledSwipeableViews enableMouseEvents index={left} onChangeIndex={shift}>
                        <div>Biography</div>
                        <div>Portfolio</div>
                        <div>Recommendations</div>
                    </StyledSwipeableViews>
                )
            }
            {/* {
                shownItem === 'bio' && <Biography/>
            }
            {
                shownItem === 'portf' && <div>Portfolio</div>
            }
            {
                shownItem === 'recs' && <Recommendations/>
            } */}
            <AboutContainer left={left}>
                <Biography/>
                <Portfolio/>
                <Recommendations/>
            </AboutContainer>
        </Fragment>
    );
}