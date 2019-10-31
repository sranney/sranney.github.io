import React from "react";
import Toggle from "../header/Toggle";
import {useMediaPredicate} from "react-media-hook";

import {Link} from "react-router-dom";

import {HeaderContainer, FlexWrapper} from "../../helpers/styled-components/containers";
import {PrimaryButton} from "../../helpers/styled-components/buttons";
import { HeaderTitle, HeaderLink, HeaderPar} from "../../helpers/styled-components/typography";

export default function Header() {
    const noGreaterThan500 = useMediaPredicate("(max-width: 500px)");
    return (
        <HeaderContainer>
            <HeaderLink to='/'>
                <HeaderTitle className='title'>F•T•L•O•L</HeaderTitle>
                <HeaderPar>For The Love of Learning</HeaderPar>   
            </HeaderLink>
            <FlexWrapper className='btn-nav'>
                <Toggle/>
                <Link to='/bloglist'><PrimaryButton size={noGreaterThan500 ? 'small' : undefined}>Posts</PrimaryButton></Link>
            </FlexWrapper>
        </HeaderContainer>
    )
};