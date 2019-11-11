import React, {Fragment,useContext, useState} from 'react';

//styled components!!!
import { HeaderContainer} from '../../helpers/styled-components/containers';

import Brand from '../header/Brand';
import Navigation from '../header/Navigation';
export default function Header() {
    return (
        <HeaderContainer>
            <Brand/>
            <Navigation/>
        </HeaderContainer>
    )
};