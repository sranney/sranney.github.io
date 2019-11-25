//@flow
import React from 'react';
import {useMediaPredicate} from 'react-media-hook';
import { SectionBtnNav, StyledSwipeableViews, FlexContainer } from '../../helpers/styled-components/containers';
import { PrimaryButton } from '../../helpers/styled-components/buttons';

type Props = {
    decrementPosition: void,
    incrementPosition: void,
    position: number,
    showBio: void,
    showPortf: void,
    showRecs: void
};

export default function AboutNav({ 
    decrementPosition = () => { },
    incrementPosition = () => { },
    position = 0, 
    showBio = () => { }, 
    showPortf = () => { }, 
    showRecs = () => { } 
}: Props) {
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
            <FlexContainer>
                <PrimaryButton onClick={decrementPosition}>{'<<<'}</PrimaryButton>
                <StyledSwipeableViews enableMouseEvents index={position}>
                    <div>Biography</div>
                    <div>Portfolio</div>
                    <div>Recommendations</div>
                </StyledSwipeableViews>
                <PrimaryButton onClick={incrementPosition}>{'>>>'}</PrimaryButton>
            </FlexContainer>
        )
    )
}
