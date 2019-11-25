//@flow
import React from 'react';

import {PostBody} from '../../helpers/styled-components/postContainers';
import { PostPar, PostTitle } from '../../helpers/styled-components/typography';

type Props = {
    msgType: string,
    resType: string,
    id: string
}

export default function NoMatch ({msgType="", resType="", id=""}: Props) {
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