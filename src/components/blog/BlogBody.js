//@flow
import React from 'react';
import type {Element} from 'react';

import InViewImage from '../general/InViewImage';

import { FlexContainer, TwitterQuote } from '../../helpers/styled-components/containers';
import { PostPar, PostTitle, PostSectionHeader } from '../../helpers/styled-components/typography';

type ParsingTypes = {
  type: string,
  content: string,
  underline: boolean,
  key: number
};

type ComponentProps = {
    body: Array<ParsingTypes>
};


export default function BlogBody({ body = [] }: ComponentProps) {
    return body.map<Element<PostPar | PostTitle | PostSectionHeader | FlexContainer>>(({ type, content, underline, key }: ParsingTypes) => {
        switch (type) {
        case "par":
            return (
            <PostPar underline={underline} key={key}>
                {content}
            </PostPar>
            );
        case "title":
            return <PostTitle key={key}>{content}</PostTitle>;
        case "sectionheader":
            return (
            <PostSectionHeader key={key}>
                {content}
            </PostSectionHeader>
            );
        case "twitter":
            return <TwitterQuote key={key} tweetId={content} />;
        case "image":
            return (
            <FlexContainer key={key}>
                <InViewImage loader imgSrc={content} />
            </FlexContainer>
            );
        default:
            return <></>;
        }
    }
    );
}