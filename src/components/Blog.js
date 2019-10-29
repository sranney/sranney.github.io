import React, {useState, useEffect, useContext} from "react";

import Body from "./blog/Body";
import Code from "./blog/Code";
import IFrame from "./blog/IFrame";
import BlogLink from "./blog/BlogLink";
import Meta from "./general/Meta";
import PostTitle from "./blog/PostTitle";
import SectionTitle from "./blog/SectionTitle";

import NoMatchOrError from "./general/NoMatchOrError";

import {DataContext} from "../helpers/context/contexts";

export default function Blog ({match: {params: {id}}}) {
    const [blogs, isLoading, error] = useContext(DataContext);
    const [blog, setBlog] = useState([]);

    useEffect(()=>setBlog((blogs && blogs.filter(({key}) => key == id)[0].blog)||[]),[blogs,id]);

    if (blog && blog.length === 0 && !isLoading) {
        return <div><NoMatchOrError msgType="no match" resType="blog" id={id}/></div>;
    }

    if(error) {
        return <div><NoMatchOrError msgType="error" resType="blog" id={id}/></div>;
    }

    return (
        <div>
            {blog && blog.map(({category, data, key})=>{
                switch(category) {
                    case "post-title":
                        return <PostTitle title={data} key={key}/>;
                    case "meta":
                        return <Meta data={data} key={key}/>;
                    case "section-title":
                        return <SectionTitle title={data} key={key}/>;
                    case "body":
                        return <Body paragraphs={data} ishtml={false} key={key}/>;
                    case "bodyHTML":
                        return <Body paragraphs={data} ishtml={true} key={key}/>;
                    case "codeblock":
                        return <Code className="code-block" renderCode={data} key={key}/>;
                    case "link":
                        return <BlogLink link={data} key={key}/>;
                    case "iframe":
                        return <IFrame src={data} key={key}/>;
                    default:
                        return <p>Not valid category value {category}</p>;
                }
            })}
        </div>
    )
};