//node modules
import React, {lazy, Fragment, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//components
import Header from "./components/general/Header";

//styled components
import GlobalStyles from "./helpers/styled-components/global";
import { ThemeProvider } from "styled-components";

//pages
import Blog from "./components/Blog";
import Home from "./components/Home";
import Search from "./components/Search";

//other helpers
import useFetchData from "./helpers/hooks/useFetchData";
import useThemeSetter from "./helpers/hooks/useThemeSetter";
import {DataContext} from "./helpers/context/contexts";

export default function App () {
    //fetchData contains all the blog data that is fetched
    //DataContext.Provider consumes this data and makes it available to all components
    const fetchData = useFetchData();
    //themeState contains theme (either light or dark) and toggleTheme, a function that can be called to toggle the theme.
    //calling toggleTheme sets the theme, which triggers an effect that changes body background image
    //styled-components' ThemeProvider is passed themeState so that the styled components can utilize the theme where needed
    const themeState = useThemeSetter('light','dark');

    return (
        <Fragment>
            <GlobalStyles/>
            <Router>
                <DataContext.Provider value={fetchData}>                       
                    <ThemeProvider theme={themeState}>
                        <div>    
                            <Header/>
                            <Switch location={location}>
                                <Route exact path='/' component={Home}/>
                                <Route path='/blog/:id' component={Blog}/>
                                <Route path='/bloglist/:searchterm?' component={Search}/>
                            </Switch>
                        </div>
                    </ThemeProvider>
                </DataContext.Provider>
            </Router>
        </Fragment>
    )
};