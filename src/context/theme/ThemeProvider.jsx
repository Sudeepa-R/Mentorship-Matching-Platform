import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
    const [isDark , setIsDark] = useState(false)
    return (
        <ThemeContext.Provider value={{isDark , setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider