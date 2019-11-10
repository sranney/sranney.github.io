//node modules
import React from 'react';

//styled components
import GlobalStyles from './helpers/styled-components/global';

import RouterApp from './RouterApp';
import BackgroundImg from './BackgroundImg';

import { ThemeProvider } from 'styled-components';
import useThemeSetter from './helpers/hooks/useThemeSetter';


export default function App () {
    //themeState contains theme (either light or dark) and toggleTheme, a function that can be called to toggle the theme.
    //calling toggleTheme sets the theme, which triggers an effect that changes body background image
    //styled-components' ThemeProvider is passed themeState so that the styled components can utilize the theme where needed
    const themeState = useThemeSetter('light', 'dark');

    return (
        <ThemeProvider theme={themeState}>
            <GlobalStyles/>
            <RouterApp/>
            <BackgroundImg/>
        </ThemeProvider>
    );
};