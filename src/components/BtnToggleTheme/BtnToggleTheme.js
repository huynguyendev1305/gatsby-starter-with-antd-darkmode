import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import DarkModeToggle from "react-dark-mode-toggle"

const ThemeTogglerBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <DarkModeToggle
            onChange={() => {
              toggleTheme(isDarkMode ? "dark" : "light")
              setIsDarkMode(!isDarkMode)
            }}
            checked={theme === "dark"}
            size={50}
          />
        )}
      </ThemeToggler>
    </div>
  )
}

export default ThemeTogglerBtn
