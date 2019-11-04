import React, {useState,useEffect} from "react";

import {useInView} from "react-intersection-observer";

export default function useImageIntersectionObserver (imgSrc,fallbackImgSrc) {
    const [src, setSrc] = useState(fallbackImgSrc);
    const [ref, inView, entry] = useInView();

    useEffect(()=>{
        if(inView && src !== imgSrc) {
            const image = new Image();
            image.src = imgSrc;
            image.onload = () => setSrc(imgSrc);
        }
    }, [imgSrc, inView, src])

    return [ref, src];
}