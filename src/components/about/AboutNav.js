import React from 'react';
import {useMediaPredicate} from 'react-media-hook';
import { SectionBtnNav, StyledSwipeableViews } from '../../helpers/styled-components/containers';
import { PrimaryButton } from '../../helpers/styled-components/buttons';

export default function AboutNav({ slide = () => { }, position = 0, showBio = () => { }, showPortf = () => { }, showRecs = () => { } }) {
    const noGreaterThan600 = useMediaPredicate('(max-width: 600px)');
    return (
        !noGreaterThan600 //want to change view based on what the 
        ? (
            <SectionBtnNav>
                <PrimaryButton size={'small'} onClick={showBio}>Biography</PrimaryButton>
                <PrimaryButton size={'small'} onClick={showPortf}>Portfolio</PrimaryButton>
                <PrimaryButton size={'small'} onClick={showRecs}>Recommendations</PrimaryButton>
            </SectionBtnNav>
        )
        : (
            <StyledSwipeableViews enableMouseEvents index={position} onChangeIndex={slide}>
                <div>Biography</div>
                <div>Portfolio</div>
                <div>Recommendations</div>
            </StyledSwipeableViews>
        )
    )
}
