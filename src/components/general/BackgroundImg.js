import React, {useContext} from "react";
import {ThemeContext, ThemeProvider} from "styled-components";

import {BackgroundImg as BackgroundImgContainer} from "../../helpers/styled-components/containers";

import useLazyImgLoader from "../../helpers/hooks/useLazyImgLoader";

export default function BackgroundImg ({imgSrc = "",fallbackImgSrc = ""}) {
    const src = useLazyImgLoader(imgSrc,fallbackImgSrc);
    const theme = useContext(ThemeContext);
    
    return (
        <BackgroundImgContainer src={src}/>
    );
};