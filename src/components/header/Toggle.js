import React, {useContext} from 'react';
import ReactToggle from 'react-toggle';

//styled components - icons
import {ToggleIcon, ToggleIconFalse} from '../../helpers/styled-components/icons';
import {ThemeContext} from 'styled-components';

//additional styles
import './Toggle.scss';

export default function Toggle () {
    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
        <label>
            <ReactToggle
                defaultChecked={theme === 'light'}
                icons={{
                    checked: <ToggleIcon>☀️</ToggleIcon>,
                    unchecked: <ToggleIconFalse>🌙</ToggleIconFalse>
                }}
                onChange={toggleTheme}
            />
        </label>
    );
};