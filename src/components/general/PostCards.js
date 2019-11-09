import React from 'react';
import _ from 'lodash';

import PostCard from './PostCard';
import NoMatchOrError from '../general/NoMatchOrError';

import {FlexWrapper} from '../../helpers/styled-components/containers';

export default function PostCards({blogList,id,linkDisplay}) {
    if (!blogList) {
        return <NoMatchOrError msgType='no match' resType='posts' id={id} linkDisplay={linkDisplay}/>;
    }

    blogList = _.orderBy(blogList,(b)=>b.meta.dateSerial,['desc']);
    
    return (
        <FlexWrapper>
            {blogList.map(({title,meta,key})=><PostCard key={key} title={title} blogKey={key} meta={meta} />)}
        </FlexWrapper>
    );
};