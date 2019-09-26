import React from "react";

import {Link} from "react-router-dom";
import Meta from "./Meta";

export default function ListItem({title,meta,blogKey}) {
    return (
        <Link to={`/blog/${blogKey}`} className='list-item'>
            <h1>{title}</h1>
            <Meta data={meta}/>
        </Link>
    )
}