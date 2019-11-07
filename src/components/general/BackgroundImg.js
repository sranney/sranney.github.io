import React from "react";

import {BackgroundImg as BackgroundImgContainer} from "../../helpers/styled-components/images";

import useLazyImgLoaderThemeSwitcher from "../../helpers/hooks/useLazyImgLoaderThemeSwitcher";

export default function BackgroundImg () {
    const src = useLazyImgLoaderThemeSwitcher();

    return <BackgroundImgContainer src={src}/>;
};