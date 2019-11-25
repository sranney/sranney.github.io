import {useState, useEffect} from 'react';

export default function useLazyImgLoader (imgSrc,theme) {
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        const image = new Image();
        image.src = imgSrc;
        image.onload = () => {
            setLoaded(true);
        };
        return () => setLoaded(false);
    }, [imgSrc,theme]);

    return loaded;
}