//@flow
import React from 'react';

import { StyledEm } from '../../helpers/styled-components/typography';
import { StyledLink } from '../../helpers/styled-components/links';

export type MetaProps = {
    meta: {
        dateDisplay: string,
        tags: Array<{
            tag: string,
            key: number
        }>
    }
};

export default function Meta ({meta:{dateDisplay="", tags=[{tag: '', key: 0}]}}: MetaProps) {
    return (
        <>
            <StyledEm>
                {dateDisplay}
            </StyledEm>
            <div>
                {tags.map(({ tag, key }) => <span key={key}><StyledLink to={`/postlist/${tag}`}>{`<<${tag}>>`}</StyledLink>  </span>)}
            </div>
        </>
    );
}