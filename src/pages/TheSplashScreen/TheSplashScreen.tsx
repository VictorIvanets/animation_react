import { useOutletContext } from "react-router-dom"
import Button from "../../widgets/Button/Button"
import { AppearanceButton } from "../../widgets/Button/button.types"
import "./thesplashscreen.sass"

const TheSplashScreen = () => {
  const { navigateTo } = useOutletContext<{
    navigateTo: (path: string) => void
  }>()

  return (
    <div className="splashscreen">
      <h1>TheSplashScreen</h1>
      <Button
        onClick={(e) => {
          e.preventDefault()
          navigateTo("/start")
        }}
        appearance={AppearanceButton.big}
      >
        start
      </Button>
    </div>
  )
}

export default TheSplashScreen
