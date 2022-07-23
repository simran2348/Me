import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    localStorage.setItem('darkMode', !isDark)
  }

  useEffect(() => {
    setIsDark(JSON.parse(localStorage.getItem('darkMode')))
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDark
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
