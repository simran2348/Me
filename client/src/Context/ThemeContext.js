import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

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
