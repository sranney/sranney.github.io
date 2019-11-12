import {useState,useEffect} from 'react';

//hook used to toggle theme for application
const useThemeSetter = (primary,secondary) => {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') || primary);

    //function that will be passed down to toggle to switch the app theme
    const toggleTheme = () => setTheme(theme => theme === primary ? secondary : primary);

    useEffect(()=>{
        //set theme in local storage
        window.localStorage.setItem('theme',theme);
        //set body theme class - purely for Toggle component css which is not a styled component
        const bodyClassList = document.querySelector('body').classList;
        theme === primary ? bodyClassList.add(primary) : bodyClassList.add(secondary);
        theme === primary ? bodyClassList.remove(secondary) : bodyClassList.remove(primary);
    },[theme]);
    
    return {theme,toggleTheme};
};

export default useThemeSetter;