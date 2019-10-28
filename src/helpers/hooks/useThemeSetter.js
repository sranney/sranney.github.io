import React, {useState,useRef,useEffect} from "react";

const useThemeSetter = (primary,secondary) => {
    const [theme, setTheme] = useState(primary);

    const toggleTheme = () => setTheme(theme => theme === primary ? secondary : primary);

    const themeState = useRef({
        theme,
        toggleTheme
    });

    useEffect(() => {
        //update themem reference
        themeState.current.theme = theme;

        //update body background image
        const bodyClassList = document.querySelector('body').classList;
        theme === primary ? bodyClassList.add(primary) : bodyClassList.add(secondary);
        theme === primary ? bodyClassList.remove(secondary) : bodyClassList.remove(primary);
    }, [theme]);

    return themeState;
};

export default useThemeSetter;