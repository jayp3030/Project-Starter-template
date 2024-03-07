import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../Context/ThemeContext";


const ThemeToggler = () => {
    const {isDark , setIsDark} = useTheme()
    const handleTheme = () => {
        isDark === false ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark') 
        setIsDark(!isDark)
    }
  return (
    <button className="text-3xl" onClick={handleTheme}>
      { isDark ? <CiLight /> : <MdDarkMode /> }
    </button>
  )
}

export default ThemeToggler
