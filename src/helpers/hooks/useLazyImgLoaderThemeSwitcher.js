import { useContext, useEffect, useReducer} from 'react';

import {ThemeContext} from 'styled-components';
import useLazyImgLoader from './useLazyImgLoader';

import LightImgSrc from '../../images/lightThemeImage.jpg';
import DarkImgSrc from '../../images/darkThemeImage.jpg';

const reducer = (state, action) => {
    if(action.type === 'light') {
        return {
            imgSrc: 'https://mylearningposts-api.herokuapp.com/images/lightThemeImage.jpg',
            fallbackImgSrc: LightImgSrc
        };
    } else if(action.type === 'dark') {
        return {
            imgSrc: 'https://mylearningposts-api.herokuapp.com/images/darkThemeImage.jpg',
            fallbackImgSrc: DarkImgSrc
        };
    } else {
        return state;
    }
};

export default function useLazyImgLoaderThemeSwitcher() {
    const { theme } = useContext(ThemeContext);
    const [{imgSrc,fallbackImgSrc}, dispatch] = useReducer(reducer,
        {
            imgSrc: `https://mylearningposts-api.herokuapp.com/images/${theme}ThemeImage.jpg`,
            fallbackImgSrc: theme === 'light' ? LightImgSrc : DarkImgSrc
        }
    );

    const loaded = useLazyImgLoader(imgSrc,theme);
    useEffect(() => {
        dispatch({type: theme});
    }, [theme]);

    return [imgSrc,fallbackImgSrc,loaded];
}