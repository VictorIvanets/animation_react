import { Outlet, useNavigate } from "react-router-dom"
import "./layout.sass"
import { useTheme } from "../../Providers/Theme/useTheme"
import Navbar from "../../components/navbar/navbar"
import AnimatabelItem from "../../components/animation/AnimatabelItem"
import { memo, useEffect, useRef, useState } from "react"
import {
  AnimationType,
  AnmationName,
  AnmationDelItem,
} from "../../components/animation/animation.types"
import MyScreen from "../Screen/Screen"

const Layout = memo(() => {
  const { theme } = useTheme()
  const animatonRef = useRef<AnimationType>(null)
  const navigate = useNavigate()
  const routePath = useRef("")
  const animateScreen = useRef<AnimationType>(null)
  const [navPath, setNavPath] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      animateScreen.current?.animate(AnmationName.slideOut)
    }, 1000)
  }, [])

  useEffect(() => {
    animatonRef.current?.animate(AnmationName.slideIn)
  }, [])

  useEffect(() => {
    if (navPath) navigateTo(navPath)
  }, [navPath])

  useEffect(() => {
    setTimeout(() => {
      navigateTo("/start")
    }, 1500)
  }, [])

  const navigateTo = (path: string) => {
    animatonRef.current?.clearanimation()
    animatonRef.current?.animate(AnmationName.slideOut)
    routePath.current = path
  }

  const animationComplite = () => {
    navigate(routePath.current)
    animatonRef.current?.animate(AnmationName.slideIn)
  }

  return (
    <div className={"app " + theme}>
      <Navbar setPath={setNavPath} />
      <div className="screen">
        <AnimatabelItem
          duration="1"
          ref={animateScreen}
          deleteitem={AnmationDelItem.delitem}
        >
          <MyScreen />
        </AnimatabelItem>

        <AnimatabelItem
          ref={animatonRef}
          duration="0.3"
          complete={animationComplite}
        >
          <Outlet context={{ navigateTo }} />
        </AnimatabelItem>
      </div>
    </div>
  )
})

export default Layout
