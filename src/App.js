//node modules
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//components
import Header from "./components/general/Header";

//pages
import Blog from "./components/Blog";
import Home from "./components/Home";
import Search from "./components/Search";

//css
import "./index.css";

//other helpers
import useFetchData from "./helpers/useFetchData";
import Context from "./helpers/context";

export default function App ( ) {

    const fetchData = useFetchData();

    return (
        <React.Fragment>
            <Router>
                <Context.Provider value={fetchData}>
                    <Header/>
                    <Switch location={location}>
                        <Route exact path='/' component={Home}/>
                        <Route path='/blog/:id' component={Blog}/>
                        <Route path='/bloglist/:searchterm?' component={Search}/>
                    </Switch>
                </Context.Provider>
            </Router>
        </React.Fragment>
    )
};