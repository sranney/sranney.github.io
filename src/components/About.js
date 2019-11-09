import React, {Fragment, useState} from 'react';

import Biography from './about/Biography';
import { SectionBtnNav, StyledSwipeableViews} from '../helpers/styled-components/containers';
import {PrimaryButton} from '../helpers/styled-components/buttons';
import Recommendations from './about/Recommendations';
import { useMediaPredicate } from 'react-media-hook';


export default function About() {
    const [shownItem, setShownItem] = useState('bio');
    const noGreaterThan600 = useMediaPredicate('(max-width: 600px)');

    //for buttons
	const showBio = () => setShownItem('bio');
	const showPortf = () => setShownItem('portf');
    const showRecs = () => setShownItem('recs');
    
    //for swipeable
    const changeShown = index => setShownItem(['bio',])

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
                        <StyledSwipeableViews enableMouseEvents onChangeIndex={changeShown}>
                        <div>Biography</div>
                        <div>Portfolio</div>
                        <div>Recommendations</div>
                    </StyledSwipeableViews>
                )
            }
            {
                shownItem === 'bio' && <Biography/>
            }
            {
                shownItem === 'recs' && <Recommendations/>
            }
        </Fragment>
    );
}