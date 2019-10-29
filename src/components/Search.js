import React, {useState, useContext} from "react";

import NoMatchOrError from "./general/NoMatchOrError";
import SearchBar from "./search/SearchBar";
import Entries from "./general/Entries";

import {DataContext} from "../helpers/context/contexts";
import useSearchFilter from "../helpers/hooks/useSearchFilter";

export default function Search ({match: {params: {searchterm}}}) {
    const [blogs, isLoading, error] = useContext(DataContext);
    const [searchValue, setSearchValue] = useState("");
    const [filteredBlogs] = useSearchFilter(blogs,searchValue||searchterm);

    const onSearchChange = ({target: {value}}) => setSearchValue(value);
    const resetSearch = () => setSearchValue("");

    if (blogs && blogs.length === 0 && !isLoading) {
        return <NoMatchOrError msgType="no match" resType="search" id={searchterm ? searchterm : ""}/>;
    }

    if (error) {
        return <NoMatchOrError msgType="error" resType="search" id={searchterm ? searchterm : ""}/>;
    }

    return (
        <div>
            <SearchBar onChange={onSearchChange} reset={resetSearch} value={searchValue}/>
            <Entries blogList={((searchValue.length === 0 && searchterm && searchterm.length === 0) && blogs) || filteredBlogs} linkDisplay={false} id={searchValue}/>
        </div>
    );
};