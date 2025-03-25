import { useState } from "react"
import { useTheme } from "../../Providers/Theme/useTheme"
import Button from "../../widgets/Button/Button"
import { ThemeSwitch } from "../../widgets/ThemeSwitch"
import "./navbar.sass"
import { LinkItem } from "./navbarItem"
import MaterialIcon from "../../shared/icons/Materialicons"

interface NavBarProps {
  setPath: (path: string) => void
}

const Navbar = ({ setPath }: NavBarProps) => {
  const { theme } = useTheme()
  const [hideNavbar, setHideNavbar] = useState(true)

  return (
    <>
      <nav className={`navbar ${hideNavbar ? "minnavbar" : ""} navbar` + theme}>
        <div className="navbar__hidebtnbox">
          <Button
            className="minnavbar-btn"
            onClick={() => setHideNavbar(!hideNavbar)}
          >
            <h3 className="mt-1">
              <MaterialIcon name="MdMenu" />
            </h3>
          </Button>
          <h4 className="ml-2">MENU</h4>
        </div>
        <div className="navbar__linkblock">
          <LinkItem
            icon="MdMapsHomeWork"
            setPath={setPath}
            path={"/start"}
            text={"Start"}
          />
          <LinkItem
            icon="MdAutoStories"
            setPath={setPath}
            path={"/splashscreen"}
            text={"Splash"}
          />
          <LinkItem
            icon="MdDragIndicator"
            setPath={setPath}
            path={"/test"}
            text={"Drop"}
          />
          <LinkItem
            icon="MdCalculate"
            setPath={setPath}
            path={"/calc"}
            text={"Calc"}
          />
          <LinkItem
            icon="MdImage"
            setPath={setPath}
            path={"/image"}
            text={"Image"}
          />
        </div>
        <ThemeSwitch />
      </nav>
    </>
  )
}

export default Navbar
