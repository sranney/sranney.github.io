import React from 'react';
import {Link} from 'react-router-dom';
import {DangerButton} from '../../helpers/styled-components/buttons';
import {PostSearch} from '../../helpers/styled-components/containers';
import { SearchInput } from '../../helpers/styled-components/inputs';

export default function SearchBar ({onChange=()=>{}, reset=()=>{}, value=""}) {
    return (
        <PostSearch>
            <SearchInput onChange={onChange} value={value} placeholder='Type To Search Posts'/>
            {reset && <Link to='/postlist'><DangerButton block className='btn btn-warning' onClick={reset}>Reset</DangerButton></Link>}
        </PostSearch>
    );
};