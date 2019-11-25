//@flow
import React from 'react';

import { CenteredContentWrapper, CenteredBlockContentWrapper } from '../../helpers/styled-components/containers';
import ScaleLoader from '@bit/davidhu2000.react-spinners.scale-loader';

type Props = {
    wrapper: string,
    theme: string
};

export default function Loader({wrapper="block", theme="light"}: Props) {

    const loaderColor = theme === 'light' ? 'var(--color-primary-800)' : 'var(--color-neutral-0)';

    if(wrapper === 'block') {
        return (
            <CenteredBlockContentWrapper>
                <ScaleLoader color={loaderColor} />
            </CenteredBlockContentWrapper>
        );
    } else if(wrapper === 'notblock') {
        return (
            <CenteredContentWrapper>
                <ScaleLoader color={loaderColor}/>
            </CenteredContentWrapper>
        );
    }
    return <></>;

}