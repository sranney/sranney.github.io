
import {useEffect, useReducer} from 'react';

const BIO = 'BIO';
const PORTF = 'PORTF';
const RECS = 'RECS';
const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';

const reducer = ({position, direction}, action) => {
    if (action.type === BIO) {
        return {position: 0, direction: position > 0 ? 'right' : 'left'};
    } else if(action.type === PORTF) {
        return {position: 1, direction: position > 1 ? 'right' : 'left'};
    } else if(action.type === RECS) {
        return {position: 2, direction: position > 2 ? 'right' : 'left'};
    } else if(action.type === DECREMENT) {
        return {position: position === 0 ? 0 : position - 1, direction: 'right'};
    } else if(action.type === INCREMENT) {
        return {position: position === 2 ? 2 : position + 1, direction: 'left'};
    }
    return {position, direction};
}

export default function useSlide () {
    const aboutSlidePosition = +window.localStorage.getItem('about-slide-position');

    const [{position, direction}, dispatch] = useReducer(
        reducer,
        {
            position: aboutSlidePosition || 0,
            direction: null
        }
    );
    
    useEffect(() => window.localStorage.setItem('about-slide-position', position), [position]);

    //for buttons
    const showBio = () => dispatch({ type: BIO });
    const showPortf = () => dispatch({ type: PORTF });
    const showRecs = () => dispatch({ type: RECS });
    
    const decrementPosition = () => dispatch({type: DECREMENT});
    const incrementPosition = () => dispatch({type: INCREMENT});

    const slide = (index) => {
        if(index === 0) {
            showBio();
        } else if(index === 1) {
            showPortf();
        } else if(index === 2) {
            showRecs();
        } else {
            showBio();
        }
    }

    return {decrementPosition, incrementPosition, slide, position, direction, showBio, showPortf, showRecs};
}
