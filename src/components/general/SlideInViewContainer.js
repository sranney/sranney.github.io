import React from 'react';
import { useInView } from 'react-intersection-observer';

import { SlideInViewContainer as Container } from '../../helpers/styled-components/containers';

export default function SlideInViewContainer ({children,...restProps}) {
    const [ref, inview] = useInView();
    return <Container ref={ref} inview={inview} {...restProps}>{children}</Container>;
};