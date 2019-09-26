import React from "react";

import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className='d-flex flex-jc-space-between flex-ai-center'>
            <Link to='/'><h1 className='title'>My Developer Journey</h1></Link>
            <div className='btn-nav'>
                <Link to='/bloglist'><button className='btn-primary'>Posts</button></Link>
                <button className='btn-primary'>Twitter</button>
                <button className='btn-primary'>YouTube</button>
            </div>
        </div>
    )
}