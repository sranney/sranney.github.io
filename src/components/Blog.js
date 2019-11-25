//@flow
import React, {useContext, useEffect, useState} from 'react';

import NoMatchOrError from './general/NoMatchOrError';
import { PostBody } from '../helpers/styled-components/postContainers';
import BlogBody from './blog/BlogBody';
import References from './blog/References';
import Loader from './general/Loader';

import {ThemeContext} from 'styled-components';

import {DataContext} from '../helpers/context/contexts';

type Props = {
    id: string
};

export default function Blog({id=""}: Props) {
    const [blogs, isLoaded, error] = useContext(DataContext);
    const {theme} = useContext(ThemeContext);
    const [{ body, references }, setBlog] = useState(
        (blogs && blogs.find(({ key }) => key === id)) || {
            body: [],
            references: []
        }
    );

    useEffect(() => setBlog((blogs && blogs.find(({ key }) => key === id)) || {body: [],references:[]}), [blogs, id]);

    if (id !== '0000' && body && body.length === 0 && isLoaded) {
        return <div><NoMatchOrError msgType='no match' resType='blog' id={id} /></div>;
    }

    if (error) {
        return <div><NoMatchOrError msgType='error' resType='blog' id={id} /></div>;
    }

    return (
        <PostBody>
            {
                !isLoaded ?
                    <Loader theme={theme} wrapper='notblock'/>
                :
                    <>
                        <BlogBody body={body} />
                        <References references={references}/>
                    </>
            }
        </PostBody>
    );
}