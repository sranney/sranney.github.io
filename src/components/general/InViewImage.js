import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import Loader from "./Loader";
import {StyledImage} from "../../helpers/styled-components/images";
import useImageIntersectionObserver from "../../helpers/hooks/useImageIntersectionObserver";

export default function InViewImage ({imgSrc,fallbackImgSrc}) {
    const [ref, src, isLoading] = useImageIntersectionObserver(imgSrc, fallbackImgSrc);
    const {theme} = useContext(ThemeContext);

    if(isLoading) {
        return <Loader theme={theme} wrapper="block"/>;
    }

    return <StyledImage ref={ref} src={src}/>;
};