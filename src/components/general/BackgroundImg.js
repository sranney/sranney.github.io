import React, {Fragment} from 'react';

import {BackgroundImg1, BackgroundImg2} from '../../helpers/styled-components/images';

import useLazyImgLoaderThemeSwitcher from '../../helpers/hooks/useLazyImgLoaderThemeSwitcher';

export default function BackgroundImg () {
    const [src, fallbackImgSrc] = useLazyImgLoaderThemeSwitcher();

    return (
        <Fragment>
            <BackgroundImg1 src={fallbackImgSrc} fade={src !== fallbackImgSrc}/>
            <BackgroundImg2 src={src}/>
        </Fragment>
    );
};