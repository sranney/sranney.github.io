import React, {useState,useRef,useEffect} from "react";

const useThemeSetter = (primary,secondary) => {
    const [theme, setTheme] = useState(primary);

    const toggleTheme = () => setTheme(theme => theme === primary ? secondary : primary);

    useEffect(() => {
        //update body background image
        const bodyClassList = document.querySelector('body').classList;
        theme === primary ? bodyClassList.add(primary) : bodyClassList.add(secondary);
        theme === primary ? bodyClassList.remove(secondary) : bodyClassList.remove(primary);
    }, [theme]);

    return {theme,toggleTheme};
};

export default useThemeSetter;