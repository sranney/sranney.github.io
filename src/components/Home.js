import React from "react";
import {Link} from "react-router-dom";

import Introduction from "./home/Introduction";


export default function Home() {
    return (
        <div className='post-body'>
            <Introduction/>
            <Link to='/bloglist'><h1>Click here to view posts</h1></Link>
        </div>
    )
}