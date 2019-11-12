import React, {useContext} from 'react';
import { useSpring, animated } from 'react-spring';
import {ThemeContext} from 'styled-components';
import {useMediaPredicate} from 'react-media-hook';
import useHover from '../../helpers/hooks/useHover';
import { PostPar, AnimatedPopup} from '../../helpers/styled-components/typography';

export default function ContainerWithAnimPopup({content, subcontent, mediaQ}) {
    const {hover, onMouseOver, onMouseOut} = useHover();
    const {opacity, x} = useSpring({
        opacity: hover ? 1 : 0,
        x: hover ? 100 : 0,
        transform: hover ? 'translateX(-10%) rotate3d(1,0,0,0deg) scale(1)' : 'translateX(-65%) rotate3d(1,0,0,50deg) scale(0.5)' 
    });

    return (
        <div
            style={{position: 'relative'}}
        >
            <PostPar 
            size={mediaQ ? 'base' : 'large'}
            onMouseOver={onMouseOver} 
            onMouseOut={onMouseOut} 
            style={{display: 'inline-block', margin: '0'}}
            >
                {content}
            </PostPar>
            <AnimatedPopup
                mediaQ={mediaQ}
                style={{
                    opacity,
                    transform: !mediaQ ? x.interpolate(x=>`translateX(${-65 + .55*x}%) rotate3d(1,0,0,${50-.5*x}deg) scale(${.5 + 0.005*x})`) : null,
                    maxHeight: mediaQ ? x.interpolate(x=>`${x}%`) : null
                }}
            >
                {content} - {subcontent}
            </AnimatedPopup>
        </div>
    );
};