//node modules
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//components
import Header from "./components/general/Header";

//styled components
import GlobalStyles from "./helpers/styled-components/global";

//additional root styles


//pages
import Blog from "./components/Blog";
import Home from "./components/Home";
import Search from "./components/Search";

//other helpers
import useFetchData from "./helpers/hooks/useFetchData";
import useThemeSetter from "./helpers/hooks/useThemeSetter";
import {ThemeContext, DataContext} from "./helpers/context/contexts";


export default function App () {
    const fetchData = useFetchData();
    const themeState = useThemeSetter('light','dark');

    return (
        <React.Fragment>
            <GlobalStyles/>
            <Router>
                <DataContext.Provider value={fetchData}>                       
                    <ThemeContext.Provider value={themeState}>
                        <Header/>
                        <Switch location={location}>
                            <Route exact path='/' component={Home}/>
                            <Route path='/blog/:id' component={Blog}/>
                            <Route path='/bloglist/:searchterm?' component={Search}/>
                        </Switch>
                    </ThemeContext.Provider>
                </DataContext.Provider>
            </Router>
        </React.Fragment>
    )
};