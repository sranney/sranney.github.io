import React from "react";

import {Link} from "react-router-dom";

export default function Meta ({data:{dateDisplay, divider, tags}}) {
    return (
        <em className='post-meta'>
            {`${dateDisplay}${divider}`}
            {tags.map(({tag,key},i)=><span key={key}><Link className='link-hover' to={`/bloglist/${tag}`}>{`<<${tag}>>`}</Link>  </span>)}
        </em>
    );
}