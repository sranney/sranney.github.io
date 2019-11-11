//node modules
import React, {useState} from 'react';

//styled components
import GlobalStyles from './helpers/styled-components/global';

import RouterApp from './RouterApp';
import BackgroundImg from './BackgroundImg';

import { ThemeProvider } from 'styled-components';
import useThemeSetter from './helpers/hooks/useThemeSetter';

export default function App () {
    const themeState = useThemeSetter('light', 'dark');

    return (
        <ThemeProvider theme={themeState}>
            <GlobalStyles/>
            <RouterApp/>
            <BackgroundImg/>
        </ThemeProvider>
    );
};