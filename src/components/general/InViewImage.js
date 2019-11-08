import React, {Fragment, useContext} from "react";
import { ThemeContext } from "styled-components";
import Loader from "./Loader";
import {StyledImage} from "../../helpers/styled-components/images";
import {PostCaption} from "../../helpers/styled-components/typography";
import useImageIntersectionObserver from "../../helpers/hooks/useImageIntersectionObserver";

export default function InViewImage ({imgSrc,loader,slideLeft,slideRight,caption}) {
    const [ref, src, isLoading] = useImageIntersectionObserver(imgSrc);
    const {theme} = useContext(ThemeContext);

    if(isLoading && loader) {
        return <Loader theme={theme} wrapper="block"/>;
    }

    return (
        <>
            <StyledImage ref={ref} src={src}/>
            {caption && <PostCaption>{caption}</PostCaption>}
        </>
    );
};