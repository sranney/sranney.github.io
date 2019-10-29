import React, {useContext} from "react";
import {ThemeContext} from "../../helpers/context/contexts";
import Toggle from "../header/Toggle";

import {Link} from "react-router-dom";

export default function Header() {
    const themeState = useContext(ThemeContext);
    return (
        <div className='light d-flex flex-jc-space-between flex-ai-center'>
            <Link to='/'><h1 className='title'>My Learning Posts</h1></Link>
            <div className='btn-nav'>
                <Toggle {...themeState}/>
                <Link to='/bloglist'><button className='btn-primary'>Posts</button></Link>
            </div>
        </div>
    )
};