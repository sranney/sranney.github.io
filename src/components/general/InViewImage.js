import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import Loader from "./Loader";
import {StyledImage} from "../../helpers/styled-components/images";
import useImageIntersectionObserver from "../../helpers/hooks/useImageIntersectionObserver";

export default function InViewImage ({imgSrc,loader,slideLeft,slideRight}) {
    const [ref, src, isLoading] = useImageIntersectionObserver(imgSrc);
    const {theme} = useContext(ThemeContext);

    if(isLoading && loader) {
        return <Loader theme={theme} wrapper="block"/>;
    }

    return <StyledImage ref={ref} src={src}/>;
};