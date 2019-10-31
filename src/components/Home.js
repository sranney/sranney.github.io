import React from "react";
import {Link} from "react-router-dom";

import {PostBody} from "../helpers/styled-components/containers";

import Introduction from "./home/Introduction";
import References from "./home/References";

export default function Home() {
    return (
        <PostBody>
            <Introduction/>
            <References/>
        </PostBody>
    )
}