import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Header from './components/general/Header';

//pages
import Blog from './components/Blog';
import Search from './components/Search';
import About from './components/About';

import { DataContext } from './helpers/context/contexts';

//other helpers
import useFetchData from './helpers/hooks/useFetchData';

export default function RouterApp () {
    //fetchData contains all the blog data that is fetched
    //DataContext.Provider consumes this data and makes it available to all components
    const fetchData = useFetchData();

    return (
        <Router>
            <Header />
            <DataContext.Provider value={fetchData}>                   
                <Switch location={location}>
                    {/*<Route exact path='/' render={props=><Blog id='0000'/>}/>*/}
                    <Route exact path='/' component={About} />
                    <Route path='/post/:id' render={({ match }) => <Blog id={match.params.id} />} />
                    <Route path='/postlist/:searchterm?' component={Search} />
                    <Route path='/about' component={About} />
                </Switch>             
            </DataContext.Provider>
        </Router>
    );
}
