import {useReducer, useEffect} from "react";

const SET_SUCCESS = "SET_BLOG";
const SET_ERROR = "SET_ERROR";
const IS_LOADING = "IS_LOADING";

const fetchReducer = ( state = {}, {type, data} = {} ) => {
    switch (type) {
        case SET_SUCCESS:
            return {...state, goodResponse: data, isLoading: false, error: null};
        case SET_ERROR:
            return {...state, goodResponse: [], isLoading: false, error: data};
        case IS_LOADING:
            return {...state, isLoading: true};
        default:
            return {...state};
    }
};

export default function useFetchData () {
    const [{goodResponse, isLoading, error}, dispatch] = useReducer(
        fetchReducer,
        {
            goodResponse: null,
            isLoading: false,
            error: null
        }
    )

    useEffect(() => {
        console.log("inside useEffect");
        dispatch({type: IS_LOADING});

        fetch(`/blogList`)
            .then(res=>res.json())
            .then(res => dispatch({type: SET_SUCCESS, data: res}))
            .catch(err => dispatch({type: SET_ERROR, data: err}));
    },[]);

    console.log([goodResponse, isLoading, error]);
    return [goodResponse, isLoading, error];
};