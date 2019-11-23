import React, {Fragment} from 'react';
import {useTransition, animated} from 'react-spring';

import {BackgroundImg as BackgroundImgContainer} from './helpers/styled-components/images'
import {AnimatedBackgroundImageContainer as ImgContainer} from './helpers/styled-components/containers';

import useLazyImgLoaderThemeSwitcher from './helpers/hooks/useLazyImgLoaderThemeSwitcher';


export default function BackgroundImg () {
    const [src, fallbackImgSrc, loaded] = useLazyImgLoaderThemeSwitcher();
    const renderedImg = !loaded
      ? [
          {
            component: <BackgroundImgContainer src={fallbackImgSrc} />,
            key: "fallback"
          }
        ]
      : [
          {
            component: <BackgroundImgContainer src={src} />,
            key: "src"
          }
        ];
    const transition = useTransition(renderedImg,img => img.key,{
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });

    return transition.map(({item,key,props: style})=><ImgContainer style={style} key={key}>{item.component}</ImgContainer>);
};