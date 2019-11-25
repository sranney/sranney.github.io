//@flow
import React from 'react';
import type {Element} from 'react';
import orderBy from 'lodash/orderBy';

import PostCard from './PostCard';
import NoMatchOrError from '../general/NoMatchOrError';

import {FlexWrapper} from '../../helpers/styled-components/containers';

type BlogListTypes = {
    title: string,
    meta: {
        dateDisplay: string,
        tags: Array<{
            tag: string,
            key: number
        }>
    },
    key: string
};

type Props = {
    blogList: Array<BlogListTypes>,
    id: string
};

export default function PostCards({
    blogList=[{
        key: '', 
        title: '',
        meta: {
            dateDisplay: '', 
            tags: [{
                tag: '', 
                key: 0
            }]
        }
    }],
    id=''
}: Props) {
    if (!blogList) {
        return <NoMatchOrError msgType='no match' resType='posts' id={id}/>;
    }

    blogList = orderBy(blogList,(b)=>b.meta.dateSerial,['desc']);
    
    return (
        <FlexWrapper>
            {blogList.map<Element<typeof PostCard>>(({title,meta,key}: BlogListTypes)=><PostCard key={key} title={title} blogKey={key} meta={meta} />)}
        </FlexWrapper>
    );
}