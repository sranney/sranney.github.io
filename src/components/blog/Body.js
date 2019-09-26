import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function Body ({paragraphs,ishtml}) {
    return (
        <div className="section-body">
            {
                ishtml ? 
                ReactHtmlParser(paragraphs)
                :
                paragraphs.map(({content,key})=>{
                    return <p className="body" key={key}>{content}</p>
                })
            }
        </div>
    );
};