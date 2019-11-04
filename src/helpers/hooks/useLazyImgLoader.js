import React, {useState, useEffect} from "react";

export default function useLazyImgLoader (imgSrc, fallbackImgSrc) {
    const [src, setSrc] = useState(fallbackImgSrc);

    useEffect(()=> {
        const image = new Image();
        image.src = imgSrc;
        image.onload = () => setSrc(imgSrc);
    }, [imgSrc]);

    return src;
};