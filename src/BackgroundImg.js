import React from 'react';
import {useSpring} from 'react-spring';

import {BackgroundImg as BackgroundImgContainer} from './helpers/styled-components/images'
import {
  AnimatedBackgroundImageContainer as AnimImgContainer,
  FallbackBackgroundImageContainer as FallbackImgContainer
} from './helpers/styled-components/containers';

import useLazyImgLoaderThemeSwitcher from './helpers/hooks/useLazyImgLoaderThemeSwitcher';


export default function BackgroundImg () {
    const [src, fallbackImgSrc, loaded] = useLazyImgLoaderThemeSwitcher();
    const style = useSpring({opacity: loaded ? 1: 0});

    return (
      <>
        <AnimImgContainer style={style}><BackgroundImgContainer src={src} /></AnimImgContainer>
        <FallbackImgContainer src={fallbackImgSrc}/>
      </>
    );
}