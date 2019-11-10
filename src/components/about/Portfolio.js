import React from 'react';
import { DiGithubAlt } from 'react-icons/di';

import {PostBody} from '../../helpers/styled-components/containers';
import {PostTitle} from '../../helpers/styled-components/typography';
import { StyledAbsoluteAnchor } from '../../helpers/styled-components/links';
import Skills from '../portfolio/Skills';


export default function Portfolio() {
    return (
        <PostBody>
            <PostTitle>🛠️ Portfolio 🛠️</PostTitle>
            <StyledAbsoluteAnchor right="5%" top="10%" size="xxlarge" href="https://github.com/sranney" target="_blank"><DiGithubAlt /></StyledAbsoluteAnchor>
            <Skills/>
        </PostBody>
    );
}