import React, {Fragment, useContext, useState} from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import Toggle from '../header/Toggle';
import MenuModal from '../general/MenuModal';

import { BtnNav } from '../../helpers/styled-components/containers';
import { PrimaryButton, IconButton } from '../../helpers/styled-components/buttons';

export default function Navigation () {
    const [showModal, setShowModal] = useState(false);
    const noGreaterThan500 = useMediaPredicate('(max-width: 500px)');
    const noLessThan700 = useMediaPredicate('(min-width: 700px)');
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <Fragment>
            <BtnNav>
                {
                    !noGreaterThan500 ?
                        <Toggle />
                        :
                        <IconButton icon={theme === 'light' ? '☀️' : '🌙'} onClick={toggleTheme} />
                }
                {
                    noLessThan700 ?
                        <Fragment>
                            <Link to='/postlist'><PrimaryButton size={noGreaterThan500 ? 'small' : undefined}>Posts</PrimaryButton></Link>
                            <Link to='/about'><PrimaryButton size={noGreaterThan500 ? 'small' : undefined}>About</PrimaryButton></Link>
                        </Fragment>
                        :
                        <IconButton onClick={()=>setShowModal(true)}><IoIosMenu /></IconButton>
                }
            </BtnNav>
            {!noLessThan700 && <MenuModal showModal={showModal} close={() => setShowModal(false)}/>}
        </Fragment>
    );
}