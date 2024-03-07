import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggler = () => {
    const [isDark , setIsDark] = useState(false)
    const handleTheme = () => {
        isDark === false ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark') 
        setIsDark(!isDark)
    }
  return (
    <button onClick={handleTheme}>
      { isDark ? <CiLight /> : <MdDarkMode /> }
    </button>
  )
}

export default ThemeToggler
