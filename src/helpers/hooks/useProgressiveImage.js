import {useEffect} from "react";
//followed tutorial - https://dev.to/selbekk/how-to-write-a-progressive-image-loading-hook-1jj2

const reducer = (({prim = false, sec = false}, {which = ""}) => {
    switch (which) {

    }
})

export default function useProgressiveLoading (primSrc, secSrc, type: 'image') {
    const [{prim,sec}, dispatch] = 

    useEffect(()=> {
        //create new image elements
        const primAsset = type === 'image' && new Image();
        const secAsset = type === 'image' &&new Image();

        //set callback on onload event
        mainImage.onLoad = () => {};
        fallbackImage.onLoad = () => {};

        //set the src attribute for the images using the passed parameters
        //by doing this we can pre-load images
        mainImage.src = src;
        fallbackImage.src = fallbackSrc;
    },[src, fallbackSrc]);

    return null;
}