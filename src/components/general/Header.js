import React, {useContext} from "react";
import {ThemeContext} from "../../helpers/context/contexts";
import Toggle from "react-toggle";

import {Link} from "react-router-dom";

export default function Header() {
    const {current: {theme,toggleTheme}} = useContext(ThemeContext);

    return (
        <div className='light d-flex flex-jc-space-between flex-ai-center'>
            <Link to='/'><h1 className='title'>My Learning Posts</h1></Link>
            <div className='btn-nav'>
                <label>                
                    <Toggle 
                        defaultChecked={theme === 'light'}
                        icons={{
                            checked: <span className='toggle-icon-true'>☀️</span>,
                            unchecked: <span className='toggle-icon-false'>🌙</span>
                        }}
                        onChange={toggleTheme}
                    />
                </label>
                <Link to='/bloglist'><button className='btn-primary'>Posts</button></Link>
            </div>
        </div>
    )
}