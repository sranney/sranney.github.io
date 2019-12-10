//@flow
import React from 'react';
import {useMediaPredicate} from 'react-media-hook';
import { SectionBtnNav, StyledSwipeableViews, FlexContainer } from '../../helpers/styled-components/containers';
import { PrimaryButton, IconButton } from '../../helpers/styled-components/buttons';

type Props = {
    decrementPosition: () => void,
    incrementPosition: () => void,
    slide: () => void,
    position: number,
    showBio: void,
    showPortf: void,
    showRecs: void
};

export default function AboutNav({ 
    decrementPosition = () => { },
    incrementPosition = () => { },
    slide = () => { },
    position = 0, 
    showBio = () => { }, 
    showPortf = () => { }, 
    showRecs = () => { } 
}: Props) {
    const noGreaterThan600 = useMediaPredicate('(max-width: 600px)');
    return !noGreaterThan600 ? ( //want to change view based on what the
      <SectionBtnNav>
        <PrimaryButton size={'small'} onClick={showBio}>
          Biography
        </PrimaryButton>
        <PrimaryButton size={'small'} onClick={showPortf}>
          Portfolio
        </PrimaryButton>
        <PrimaryButton size={'small'} onClick={showRecs}>
          References
        </PrimaryButton>
      </SectionBtnNav>
    ) : (
      <FlexContainer>
        <IconButton onClick={decrementPosition}>👈</IconButton>
        <StyledSwipeableViews enableMouseEvents index={position} onChangeIndex={slide}>
          <div>Biography</div>
          <div>Portfolio</div>
          <div>References</div>
        </StyledSwipeableViews>
        <IconButton onClick={incrementPosition}>👉</IconButton>
      </FlexContainer>
    );
}
