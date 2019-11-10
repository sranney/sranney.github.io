import React from 'react';

import {HeaderLink} from '../../helpers/styled-components/links';
import {HeaderTitle, HeaderPar} from '../../helpers/styled-components/typography';

export default function Brand() {
    return (
        <HeaderLink to='/'>
            <HeaderTitle>F•T•L•O•E</HeaderTitle>
            <HeaderPar>For the Love of Engineering</HeaderPar>
        </HeaderLink>
    );
};