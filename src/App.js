//node modules
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

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

    const [blogs, isLoading, error] = useFetchData();

    return (
        <React.Fragment>
            <Router>
                <Route render={({location})=>
                    <Context.Provider value={[blogs, isLoading, error]}>
                        <Header/>
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={350}
                                classNames="fade"
                            >
                                <Switch location={location}>
                                    <Route exact path='/' component={Home}/>
                                    <Route path='/blog/:id' component={Blog}/>
                                    <Route path='/bloglist/:searchterm?' component={Search}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </Context.Provider>
                }/>
            </Router>
        </React.Fragment>
    )
};