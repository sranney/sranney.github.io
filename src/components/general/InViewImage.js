//@flow
import React, {Fragment, useContext} from 'react';
import { ThemeContext } from 'styled-components';
import Loader from './Loader';
import {StyledImage} from '../../helpers/styled-components/images';
import {PostCaption} from '../../helpers/styled-components/typography';
import useImageIntersectionObserver from '../../helpers/hooks/useImageIntersectionObserver';

type Props = {
    imgSrc: string,
    loader: boolean,
    caption?: string
}

export default function InViewImage ({imgSrc="",loader=false,caption=""}: Props) {
    const [ref, src, isLoading] = useImageIntersectionObserver(imgSrc);
    const {theme} = useContext(ThemeContext);

    if(isLoading && loader) {
        return <Loader theme={theme} wrapper='block'/>;
    }

    return (
        <Fragment>
            <StyledImage ref={ref} src={src}/>
            {caption && <PostCaption>{caption}</PostCaption>}
        </Fragment>
    );
}