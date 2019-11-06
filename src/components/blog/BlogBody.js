import React from "react";

import InViewImage from "../general/InViewImage";

import { FlexContainer, TwitterQuote } from "../../helpers/styled-components/containers";
import { PostPar, PostTitle, PostSectionHeader } from "../../helpers/styled-components/typography";

export default function BlogBody({body}) {
    return body.map(({ type, content, underline, fallbackContent, key }) => {
        switch (type) {
            case 'par':
                return <PostPar underline={underline} key={key}>{content}</PostPar>;
            case 'title':
                return <PostTitle key={key}>{content}</PostTitle>;
            case 'sectionheader':
                return <PostSectionHeader key={key}>{content}</PostSectionHeader>;
            case 'github':
                return <GitCodeBlock src={content} />;
            case 'twitter':
                return <TwitterQuote tweetId={content} />;
            case 'image':
                return <FlexContainer key={key}><InViewImage imgSrc={content} fallbackImgSrc={`./${fallbackContent}`} /></FlexContainer>;
            default:
                return <></>;
        }
    });
};