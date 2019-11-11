import React from 'react';
import { useSpring } from 'react-spring';
import { createPortal } from 'react-dom';

import { FaWindowClose } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import {StyledLink} from '../../helpers/styled-components/links'; 

import {StyledModal} from '../../helpers/styled-components/containers';
import {AnimatedPrimaryButton} from '../../helpers/styled-components/buttons';


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

export default function MenuModal ({close, showModal}) {
    const modalAnim = useSpring({
        transform: showModal ? 'translate3d(0,0,0) scale(1)' : 'translate3d(0,100%,0) scale(0.7)'
    });
    const { x, opacity } = useSpring({
        x: showModal ? 0 : 300
    });

    return createPortal(
        <StyledModal style={modalAnim}>
            <IconContext.Provider value={{ style: { 
                position: 'absolute', 
                right: '5%', 
                top: '2%', 
                fontSize: 'var(--font-size-xxlarge)', 
                color: 'var(--color-danger-800)', 
                fontWeight: 'bold'
            }}}>
                <FaWindowClose onClick={() => close()}/>
            </IconContext.Provider>
            {navArr.map(({text,...linkprops},idx) => {
                return (
                        <StyledLink {...linkprops}>
                            <AnimatedPrimaryButton 
                            style={{
                                opacity,
                                transform: x.interpolate(x => `translateY(${(idx+1) * x}px) scale(${1 - x/450})`)
                            }} 
                            onClick={() => close(false)} 
                            block
                            >{text}</AnimatedPrimaryButton>
                        </StyledLink>
                );
            })}
        </StyledModal>
    ,
        document.querySelector('#modal')
    );
};