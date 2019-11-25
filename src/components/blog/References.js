//@flow
import React, {Fragment} from 'react';
import type {Element} from 'react';

import { PostSectionHeader } from '../../helpers/styled-components/typography';
import { StyledAnchorBlock } from '../../helpers/styled-components/links';

type ParsingTypes = {
    text: string,
    href: string,
    key: number
}

type ComponentProps = {
    references: Array<ParsingTypes>
};

export default function References ({references = []}: ComponentProps) {
    return (
        <Fragment>
            <PostSectionHeader>References and Other Goodies</PostSectionHeader>
            <ul>
                {
                    references.map<Element<StyledAnchorBlock>>(({text, href, key}: ParsingTypes) => <StyledAnchorBlock key={key} href={(!href.includes('https') && `https://${href}`) || href} size='xsmall'>{text}</StyledAnchorBlock>)
                }
            </ul>
        </Fragment>
    )
}