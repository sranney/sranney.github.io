//@flow
import React from 'react';
import {Link} from 'react-router-dom';
import {DangerButton} from '../../helpers/styled-components/buttons';
import {PostSearch} from '../../helpers/styled-components/postContainers';
import { SearchInput } from '../../helpers/styled-components/inputs';

type Props = {
    onChange: ({
        target: {
            value: string
        }
    }) => void,
    reset: () => void,
    value: string
}

export default function SearchBar ({onChange=()=>{}, reset=()=>{}, value=""}: Props) {
    return (
        <PostSearch>
            <SearchInput onChange={onChange} value={value} placeholder='Type To Search Posts'/>
            {reset && <Link to='/postlist'><DangerButton block className='btn btn-warning' onClick={reset}>Reset</DangerButton></Link>}
        </PostSearch>
    );
}