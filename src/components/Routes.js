import React from 'react';
import { Route, Switch } from 'react-router-dom';

//pages
import Blog from './Blog';
import Search from './Search';
import About from './About';
import Welcome from './Welcome';
import Favorites from './Favorites';

export default function Routes() {
    return (
        <Switch >
            <Route exact path='/' component={Welcome} />
            <Route path='/post/:id' render={({ match }) => <Blog id={match.params.id} />} />
            <Route path='/postlist/:searchterm?' component={Search} />
            <Route path='/favorites' component={Favorites} />
            <Route exact path='/about' component={About} />
        </Switch>
    );
}
 