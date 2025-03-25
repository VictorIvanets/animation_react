import { memo } from "react"
import Button from "../../Button/Button"
import { useTheme } from "../../../Providers/Theme/useTheme"
import Night from "/night.svg"
import Day from "/day.svg"
import "./temeswitch.sass"
export const ThemeSwitch = memo(() => {
  const { theme, toggleTheme } = useTheme()
  {
    return (
      <div>
        <Button onClick={toggleTheme}>
          {theme === "dark" ? (
            <div className="svgbox">
              <img className="svg" src={Night} />
            </div>
          ) : (
            <div className="svgbox">
              <img className="svg" src={Day} />
            </div>
          )}
        </Button>
      </div>
    )
  }
})

export default ThemeSwitch
