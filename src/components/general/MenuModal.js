import React, {useContext} from 'react';
import {StyledLink} from '../../helpers/styled-components/links'; 
import {createPortal} from 'react-dom';
import {StyledModal} from '../../helpers/styled-components/containers';
import {PrimaryButton} from '../../helpers/styled-components/buttons';
import { ThemeContext } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function MenuModal ({close}) {

    return createPortal(
        <StyledModal>
            <IconContext.Provider value={{ style: { 
                position: 'absolute', 
                right: '5%', 
                top: '2%', 
                fontSize: 'var(--font-size-xxlarge)', 
                color: 'var(--color-danger-800)', 
                fontWeight: 'bold'
            }}}>
                <AiOutlineClose onClick={() => close(false)}/>
            </IconContext.Provider>
            <StyledLink to='/'><PrimaryButton onClick={() => close(false)} block>Home</PrimaryButton></StyledLink>
            <StyledLink to='/postlist'><PrimaryButton onClick={() => close(false)} block>Posts</PrimaryButton></StyledLink>
            <StyledLink to='/about'><PrimaryButton onClick={() => close(false)} block>About</PrimaryButton></StyledLink>
        </StyledModal>
    ,
        document.querySelector('#modal')
    );
};