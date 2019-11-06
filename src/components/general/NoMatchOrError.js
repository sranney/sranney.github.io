import React, {Fragment} from "react";
import {Link} from "react-router-dom";

export default function NoMatch ({msgType, resType, id, linkDisplay=true}) {
    return (
        <Fragment>
            {
                msgType === 'no match' ?
                    <p>There were no matches for {resType} with {resType === 'blog' ? "id" : "search term"}: {id}</p>
                :
                    <p>Error retrieving your requested data: {resType} with {resType === 'blog' ? "id" : "search term"}: {id}</p>
            }
            {linkDisplay && <Link className='link' to="/postlist">Click here to return to all posts</Link>}
        </Fragment>
    )
}