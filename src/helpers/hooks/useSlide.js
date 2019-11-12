import {useEffect, useReducer} from 'react';


const BIO = 'BIO';
const PORTF = 'PORTF';
const RECS = 'RECS';

const reducer = ({position, direction}, action) => {
    if (action.type === BIO) {
        return {position: 0, direction: position > 0 ? 'right' : 'left'};
    } else if(action.type === PORTF) {
        return {position: 1, direction: position > 1 ? 'right' : 'left'};
    } else if(action.type === RECS) {
        return {position: 2, direction: position > 2 ? 'right' : 'left'};
    }
    return {position, direction};
}

export default function useSlide () {

    const [{position, direction}, dispatch] = useReducer(
        reducer,
        {
            position: +window.localStorage.getItem('about-slide-position') || 0,
            direction: null
        }
    );
    
    useEffect(() => window.localStorage.setItem('about-slide-position', position), [position]);

    //for buttons
    const showBio = () => dispatch({ type: BIO });
    const showPortf = () => dispatch({ type: PORTF });
    const showRecs = () => dispatch({ type: RECS });
    //for swipeable
    const slide = (index) => {
        if(index === 0) {
            dispatch({type: BIO});
        } else if(index === 1) {
            dispatch({type: PORTF});
        } else if(index === 2) {
            dispatch({type: RECS});
        }
    }

    return {slide, position, direction, showBio, showPortf, showRecs};
}
