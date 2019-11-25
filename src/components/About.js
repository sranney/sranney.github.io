import React, {Fragment} from 'react';

import AboutBody from './about/AboutBody';
import AboutNav from './about/AboutNav';

import useSlide from '../helpers/hooks/useSlide';

export default function About() {
    const {position, direction, ...aboutNavFuncs} = useSlide();

    return (
        <Fragment>
            <AboutNav position={position} {...aboutNavFuncs}/>
            <AboutBody position={position} direction={direction}/>
        </Fragment>
    );
}