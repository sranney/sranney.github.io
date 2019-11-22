import {useState, useEffect, useRef} from 'react';

export default function useLazyImgLoader (imgSrc, fallbackImgSrc) {
    const [src, setSrc] = useState(fallbackImgSrc);
    const count = useRef(0);

    useEffect(()=> {
        const image = new Image();
        image.src = imgSrc;
        image.onload = () => {
            setSrc(imgSrc);
        };
        () => image.onload = null;
    }, [imgSrc]);

    return src;
};