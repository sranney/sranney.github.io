//@flow
import React, {useState, useContext} from 'react';

import NoMatchOrError from './general/NoMatchOrError';
import SearchBar from './search/SearchBar';
import PostCards from './general/PostCards';
import Loader from './general/Loader';

import {DataContext} from '../helpers/context/contexts';
import {ThemeContext} from 'styled-components';
import useSearchFilter from '../helpers/hooks/useSearchFilter';

type Props = {
    match: {
        params: {
            searchterm: string
        }
    }
};

export default function Search ({match: {params: {searchterm=""}}}: Props) {
    const [blogs, isLoaded, error] = useContext(DataContext);
    const {theme} = useContext(ThemeContext);
    const [searchValue, setSearchValue] = useState('');
    const [filteredBlogs] = useSearchFilter(blogs,searchValue||searchterm);

    const onSearchChange = ({target: {value}}): void => setSearchValue(value);
    const resetSearch = (): void => setSearchValue('');

    if (blogs && blogs.length === 0 && isLoaded) {
        return <NoMatchOrError msgType='no match' resType='search' id={searchterm ? searchterm : ''}/>;
    }

    if (error) {
        return <NoMatchOrError msgType='error' resType='search' id={searchterm ? searchterm : ''}/>;
    }

    if(!isLoaded) {
        return <Loader theme={theme} wrapper='notblock'/>;
    }

    return (
        <div>
            <SearchBar onChange={onSearchChange} reset={resetSearch} value={searchValue}/>
            <PostCards 
                blogList={((searchValue.length === 0 && searchterm && searchterm.length === 0) && blogs) || filteredBlogs} linkDisplay={false} id={searchValue}
            />
        </div>
    );
}