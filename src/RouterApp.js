import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import Header from './components/general/Header';
import Routes from './components/Routes';

import { DataContext } from './helpers/context/contexts';

//other helpers
import useFetchData from './helpers/hooks/useFetchData';

export default function RouterApp () {
    const fetchData = useFetchData();

    return (
        <Router>
            <Header />
            <DataContext.Provider value={fetchData}>                   
                <Routes/>
            </DataContext.Provider>
        </Router>
    );
}
