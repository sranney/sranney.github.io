import React, {useContext} from "react";
import {ThemeContext} from "styled-components";
import {StyledImage} from "../../helpers/styled-components/images";
import { CenteredBlockContentWrapper} from "../../helpers/styled-components/containers";
import ScaleLoader from '@bit/davidhu2000.react-spinners.scale-loader';
import useImageIntersectionObserver from "../../helpers/hooks/useImageIntersectionObserver";

export default function InViewImage ({imgSrc,fallbackImgSrc}) {
    const [ref, src, isLoading] = useImageIntersectionObserver(imgSrc, fallbackImgSrc);
    const {theme} = useContext(ThemeContext);

    if(isLoading) {
        return (
            <CenteredBlockContentWrapper>
                <ScaleLoader color={theme === 'light' ? 'var(--color-primary-800)' : 'var(--color-neutral-0)'}/>
            </CenteredBlockContentWrapper>
        );
    }

    return <StyledImage ref={ref} src={src}/>;
};