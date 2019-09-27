import React from "react";

import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className='d-flex flex-jc-space-between flex-ai-center'>
            <Link to='/'><h1 className='title'>My Learning Posts</h1></Link>
            <div className='btn-nav'>
                <Link to='/bloglist'><button className='btn-primary'>Posts</button></Link>
            </div>
        </div>
    )
}