import React, {useContext} from "react";
import ReactHtmlParser from "react-html-parser";

import {ThemeContext} from "styled-components";

import {PostPar} from "../../helpers/styled-components/typography";

export default function Body ({paragraphs,ishtml}) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="section-body">
            {
                ishtml ? 
                ReactHtmlParser(paragraphs)
                :
                paragraphs.map(({content,key})=>{
                    return <PostPar theme={theme} key={key}>{content}</PostPar>
                })
            }
        </div>
    );
};