//@flow
import React from 'react';

import Meta from './Meta';
import { StyledLinkBlock } from '../../helpers/styled-components/links';
import {PostCard as PostCardContainer} from '../../helpers/styled-components/postContainers';
import { useMediaPredicate } from 'react-media-hook';

type Props = {
    title: string,
    meta: {
        dateDisplay: string,
        tags: Array<{
            tag: string,
            key: number
        }>
    },
    blogKey: string
};

export default function PostCard({title="",meta={dateDisplay:"", tags: [{tag: '', key: 0}]},blogKey=""}: Props) {
    const noGreaterThan700 = useMediaPredicate('(max-width: 700px)');
    return (
        <PostCardContainer>
            <StyledLinkBlock to={`/post/${blogKey}`} size={noGreaterThan700 ? 'large' : 'xlarge'}>
                <span>{title}</span>
            </StyledLinkBlock>
            <Meta meta={meta} />
        </PostCardContainer>
    )
}