import React, {useContext} from "react";

import { ThemeContext } from "../../helpers/context/contexts";

import { BodyPar } from "../../helpers/styled-components/typography";

export default function Introduction () {
    const {theme} = useContext(ThemeContext);
    return (
        <React.Fragment>
            <BodyPar theme={theme}>Some random text on some stuff</BodyPar>
            <p className='body'>Some random text on some stuff.</p>
            <p className='body'>Some random text on some stuff</p>
            <p className='body'>Some random text on some stuff.</p>
            <p className='body'>Some random text on some stuff</p>
            <p className='body'>Some random text on some stuff.</p>
            <p className='body'>Some random text on some stuff</p>
            <p className='body'>Some random text on some stuff.</p>
            <p className='body'>Some random text on some stuff</p>
            <p className='body'>Some random text on some stuff.</p>
            <p className='body'>Some random text on some stuff</p>
            <p className='body'>Some random text on some stuff.</p>
            <p className='body'>Some random text on some stuff</p>
            <p className='body'>Some random text on some stuff.</p>
        </React.Fragment>
    )
}















