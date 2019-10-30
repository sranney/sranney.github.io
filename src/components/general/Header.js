import React from "react";
import Toggle from "../header/Toggle";

import {Link} from "react-router-dom";

import {HeaderContainer, FlexWrapper} from "../../helpers/styled-components/containers";
import {PrimaryButton} from "../../helpers/styled-components/buttons";
import { HeaderTitle, HeaderLink, HeaderPar} from "../../helpers/styled-components/typography";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLink to='/'>
                <HeaderTitle className='title'>F•T•L•O•L</HeaderTitle>
                <HeaderPar>For The Love of Learning</HeaderPar>   
            </HeaderLink>
            <FlexWrapper className='btn-nav'>
                <Toggle/>
                <Link to='/bloglist'><PrimaryButton>Posts</PrimaryButton></Link>
            </FlexWrapper>
        </HeaderContainer>
    )
};