import { useState, useEffect } from "react"
import { useReload } from "../../hooks/useReload"
import MaterialIcon, {
  TypeMaterialIcons,
} from "../../shared/icons/Materialicons"
import "./navbar.sass"

interface NavBarItemProps {
  setPath: (path: string) => void
  path: string
  text: string
  icon: TypeMaterialIcons
}

export const LinkItem = ({ setPath, path, text, icon }: NavBarItemProps) => {
  const [myPath, setMyPath] = useState("")
  const [styleMyPath, setStyleMyPath] = useState("")
  const [reload, reloading] = useReload()
  const currentPath = location.pathname
  const setToPath = (path: string) => {
    setPath(path)
    setMyPath(path)
  }

  useEffect(() => {
    setStyleMyPath("white")
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (myPath === currentPath) {
        setStyleMyPath("activepath")
      } else {
        setStyleMyPath("")
        reload()
      }
    }, 200)
  }, [myPath, reload, currentPath])

  return (
    <>
      {reloading ? (
        <a onClick={() => setToPath(path)}>
          <div className={`linkitem ${styleMyPath}`}>
            <h4 className="mt-1">
              <MaterialIcon name={icon} />
            </h4>
            <p>{text}</p>
          </div>
        </a>
      ) : (
        <a onClick={() => setToPath(path)}>
          <div className={`linkitem ${styleMyPath}`}>
            <h4 className="mt-1">
              <MaterialIcon name={icon} />
            </h4>
            <p>{text}</p>
          </div>
        </a>
      )}
    </>
  )
}
