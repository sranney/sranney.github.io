import React from 'react';

import Meta from './Meta';

import { StyledLinkBlock } from '../../helpers/styled-components/links';
import {PostCard as PostCardContainer} from '../../helpers/styled-components/containers';
import { useMediaPredicate } from 'react-media-hook';

export default function PostCard({title,meta,blogKey}) {
    const noGreaterThan700 = useMediaPredicate('(max-width: 700px)');
    return (
        <PostCardContainer>
            <StyledLinkBlock to={`/post/${blogKey}`} size={noGreaterThan700 ? 'large' : 'xlarge'}>
                <span>{title}</span>
            </StyledLinkBlock>
            <Meta data={meta} />
        </PostCardContainer>
    )
}