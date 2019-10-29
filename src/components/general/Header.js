import React from "react";
import Toggle from "../header/Toggle";

import {Link} from "react-router-dom";

import {HeaderContainer, FlexWrapper} from "../../helpers/styled-components/containers";
import {PrimaryButton} from "../../helpers/styled-components/buttons";

export default function Header() {
    return (
        <HeaderContainer>
            <Link to='/'><h1 className='title'>My Learning Posts</h1></Link>
            <FlexWrapper className='btn-nav'>
                <Toggle/>
                <Link to='/bloglist'><PrimaryButton>Posts</PrimaryButton></Link>
            </FlexWrapper>
        </HeaderContainer>
    )
};