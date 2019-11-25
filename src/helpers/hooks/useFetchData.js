import {useReducer, useEffect} from 'react';

const SET_SUCCESS = 'SET_BLOG';
const SET_ERROR = 'SET_ERROR';
const IS_LOADING = 'IS_LOADING';

const fetchReducer = ( state = {}, {type, data} = {} ) => {
    switch (type) {
        case SET_SUCCESS:
            return {...state, goodResponse: data, isLoaded: true, error: null};
        case SET_ERROR:
            return {...state, goodResponse: [], isLoaded: false, error: data};
        case IS_LOADING:
            return {...state, isLoaded: false};
        default:
            return {...state};
    }
};

export default function useFetchData () {
    const [{goodResponse, isLoaded, error}, dispatch] = useReducer(
        fetchReducer,
        {
            goodResponse: null,
            isLoaded: false,
            error: null
        }
    );

    useEffect(() => {
        dispatch({type: IS_LOADING});

        fetch('https://mylearningposts-api.herokuapp.com/blogList')
            .then(res => res.json())
            .then(res => dispatch({type: SET_SUCCESS, data: res}))
            .catch(err => dispatch({type: SET_ERROR, data: err}));
    },[]);

    return [goodResponse, isLoaded, error];
}