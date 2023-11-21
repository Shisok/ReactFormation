import { useContext } from "react"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import "./ToggleTheme.css"
import { ThemeContext } from "../context/ThemeProvider"
export default function ToggleTheme() {

  const {toggleTheme,darkMode} = useContext(ThemeContext)
  return (
    <button
    onClick={toggleTheme}
    className="toggle-theme-btn">
      <span > Go {darkMode? "Light" : "Dark"}
      </span>
      <img src={darkMode? sun : moon} alt="toggle icon" />
    </button>
  )
}
