import { IconButton } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThemeContext from '../../context/theme/ThemeContext';

const ThemeComponent = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
        }
    }, [setIsDark]);


    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <IconButton onClick={toggleTheme}>
            {isDark ? <WbSunnySharpIcon style={{ color: '#fff' }} /> : <DarkModeSharpIcon style={{ color: '#000' }} />}
        </IconButton>
    )
}

export default ThemeComponent