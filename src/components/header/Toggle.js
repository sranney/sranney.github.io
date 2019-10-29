import React from "react";
import ReactToggle from "react-toggle";

//styled components - icons
import {ToggleIcon, ToggleIconFalse} from "../../helpers/styled-components/icons";

//additional styles
import "./Toggle.scss";

export default function Toggle ({theme,toggleTheme}) {
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