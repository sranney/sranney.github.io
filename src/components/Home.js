import React, {useContext} from "react";

import {PostBody} from "../helpers/styled-components/containers";

import References from "./blog/References";
import BlogBody from "./blog/BlogBody";

export default function Home() {
    if(loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>error</div>;
    }

    const blog = data && data.find(({key}) => key === "0000");

    return (
        <PostBody>
            <BlogBody body={blog.body}/>
            <References references={blog.references}/>
        </PostBody>
    )
}