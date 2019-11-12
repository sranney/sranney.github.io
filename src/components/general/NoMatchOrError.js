import React, {Fragment} from 'react';

import {PostBody} from '../../helpers/styled-components/containers';
import { PostPar, PostTitle } from '../../helpers/styled-components/typography';

export default function NoMatch ({msgType, resType, id, linkDisplay=true}) {
    return (
        <PostBody>
            <PostTitle>🙈🙉🙊</PostTitle>
            {
                msgType === 'no match' ?
                    <PostPar>There were no matches for {resType} with {resType === 'blog' ? 'id' : 'search term'}: {id}</PostPar>
                :
                    <PostPar>Error retrieving your requested data: {resType} with {resType === 'blog' ? 'id' : 'search term'}: {id}</PostPar>
            }
        </PostBody>
    )
}