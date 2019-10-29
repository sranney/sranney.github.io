import React from "react";
import {Link} from "react-router-dom";

import {PostBody} from "../helpers/styled-components/containers";

import Introduction from "./home/Introduction";

export default function Home() {
    return (
        <PostBody>
            <Introduction/>
            <Link to='/bloglist'><h1>Click here to view posts</h1></Link>
        </PostBody>
    )
}