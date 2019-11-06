import React, {Fragment} from "react";
import { PostSectionHeader } from "../../helpers/styled-components/typography";
import { StyledAnchorBlock } from "../../helpers/styled-components/links";

export default function References ({references}) {
    return (
        <Fragment>
            <PostSectionHeader>References and Other Goodies</PostSectionHeader>
            <ul>
                {
                    references.map(({text, href, key}) => <StyledAnchorBlock key={key} href={(!href.includes('https') && `https://${href}`) || href} size='xsmall'>{text}</StyledAnchorBlock>)
                }
            </ul>
        </Fragment>
    )
}