import React from "react";

import { StyledEm } from "../../helpers/styled-components/typography";
import { StyledLink } from "../../helpers/styled-components/links";
import { FlexContainer } from "../../helpers/styled-components/containers";

export default function Meta ({data:{dateDisplay, divider, tags}}) {
    return (
        // <FlexContainer>
        <>
        <StyledEm>
            {dateDisplay}
        </StyledEm>
        <div>
            {tags.map(({ tag, key }, i) => <span key={key}><StyledLink to={`/postlist/${tag}`}>{`<<${tag}>>`}</StyledLink>  </span>)}
        </div>
        </>
        // </FlexContainer>
    );
}