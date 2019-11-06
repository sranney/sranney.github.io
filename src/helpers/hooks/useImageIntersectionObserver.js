import React, {useReducer,useEffect} from "react";

import {useInView} from "react-intersection-observer";

const reducer = (state,action) => {
    if(action.type === 'loading') {
        return {...state,isLoading: true};
    } else if(action.type === 'loaded') {
        return {isLoading: false, src: action.data};
    }
    return state;
}

export default function useImageIntersectionObserver (imgSrc) {
    const [{src, isLoading}, dispatch] = useReducer(
        reducer,
        {
            src: null,
            isLoading: false
        }
    );
    const [ref, inView] = useInView();

    useEffect(()=>{
        if(inView && src !== imgSrc) {
            const image = new Image();
            image.src = imgSrc;
            dispatch({type: 'loading'});
            image.onload = () => dispatch({type: 'loaded', data: imgSrc});
        }
    }, [imgSrc, inView, src])

    return [ref, src, isLoading];
}