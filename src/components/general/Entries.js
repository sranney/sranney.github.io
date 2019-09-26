import React from "react";
import _ from "lodash";

import ListItem from "../general/ListItem";
import NoMatchOrError from "../general/NoMatchOrError";

export default function Entries({blogList,id,linkDisplay}) {
    if (!blogList) {
        return <NoMatchOrError msgType="no match" resType="posts" id={id} linkDisplay={linkDisplay}/>;
    }

    blogList = _.orderBy(blogList,(b)=>b.meta.dateSerial,['desc']);
    
    return (
        <div className='entries'>
            {blogList.map(({title,meta,key})=><ListItem key={key} title={title} blogKey={key} meta={meta} />)}
        </div>
    );
};