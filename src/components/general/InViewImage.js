import React from "react";
import {StyledImage} from "../../helpers/styled-components/images";
import GitHub from "../../images/Github_edited.jpg";
import { useInView } from "react-intersection-observer";
import useImageIntersectionObserver from "../../helpers/hooks/useImageIntersectionObserver";

export default function InViewImage ({imgSrc,fallbackImgSrc}) {
    const [ref, src] = useImageIntersectionObserver(imgSrc, fallbackImgSrc)
    return <StyledImage ref={ref} src={src}/>;
};