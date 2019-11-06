import React, {Fragment} from "react";
import { StyledAnchor, PostSectionHeader } from "../../helpers/styled-components/typography";

export default function References ({references}) {
    return (
        <Fragment>
            <PostSectionHeader>References and Other Goodies</PostSectionHeader>
            <ul>
                {
                    references.map(({text,...rest}) => <StyledAnchor {...rest}>{text}</StyledAnchor>)
                }
            </ul>
        </Fragment>
    )
}