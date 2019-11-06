import React, {useContext} from "react";
import Toggle from "../header/Toggle";
import {useMediaPredicate} from "react-media-hook";

import {Link} from "react-router-dom";

import {ThemeContext} from "styled-components";

//styled components!!!
import { HeaderContainer, BtnNav} from "../../helpers/styled-components/containers";
import {PrimaryButton, ThemeButton} from "../../helpers/styled-components/buttons";
import { HeaderTitle, HeaderPar} from "../../helpers/styled-components/typography";
import {HeaderLink} from "../../helpers/styled-components/links";

export default function Header() {
    const noGreaterThan500 = useMediaPredicate("(max-width: 500px)");
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <HeaderContainer>
            <HeaderLink to='/'>
                <HeaderTitle>F•T•L•O•E</HeaderTitle>
                <HeaderPar>For the Love of Engineering</HeaderPar>   
            </HeaderLink>
            <BtnNav>
                {
                    !noGreaterThan500 ? 
                        <Toggle/>
                    :
                        <ThemeButton onClick={toggleTheme}/>
                }
                <Link to='/postlist'><PrimaryButton size={noGreaterThan500 ? 'small' : undefined}>Posts</PrimaryButton></Link>
            </BtnNav>
        </HeaderContainer>
    )
};