//@flow
import React from 'react';
import type {Element} from 'react';

import { useSpring } from 'react-spring';
import { createPortal } from 'react-dom';

import { FaWindowClose } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import {StyledLink} from '../../helpers/styled-components/links'; 

import {StyledModal} from '../../helpers/styled-components/containers';
import {PrimaryButton} from '../../helpers/styled-components/buttons';
import {PointerCursor} from '../../helpers/styled-components/mixins/cursors';


const navArr = [
    {
        to: '/',
        text: 'Home',
        key: 0
    },
    {
        to: '/postlist',
        text: 'Posts',
        key: 1
    },
    {
        to: '/about',
        text: 'About',
        key: 2
    }
]; 

const iconStyles = {
  position: "absolute",
  right: "5%",
  top: "2%",
  fontSize: "var(--font-size-xxlarge)",
  color: "var(--color-danger-800)",
  fontWeight: "bold",
  cursor: PointerCursor
};

type Props = {
    close: ()=>void,
    showModal: boolean
};

export default function MenuModal ({close=()=>{}, showModal=false}: Props) {
    const modalAnim = useSpring({
        transform: showModal ? 'translateY(0) scale(1)' : 'translateY(100%) scale(0.7)'
    });

    return createPortal(
        <StyledModal style={modalAnim}>
            <IconContext.Provider value={{ style: iconStyles}}>
                <FaWindowClose onClick={() => close()}/>
            </IconContext.Provider>
            {navArr.map<Element<typeof StyledLink>>(({text,key, ...linkprops}) => {
                return (
                        <StyledLink key={key} {...linkprops}>
                            <PrimaryButton
                            onClick={() => close(false)} 
                            block
                            >{text}</PrimaryButton>
                        </StyledLink>
                );
            })}
        </StyledModal>
    ,
        document.querySelector('#modal')
    );
}