import {
  useRef,
  AnimationEvent,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react"
import { useNavigate } from "react-router-dom"
import { AnmationDelItem, AnmationName, PropsType } from "./animation.types"

const AnimatabelItem = forwardRef(
  (
    {
      children,
      navigateForward,
      duration = "0.4",
      complete = () => {},
      deleteitem = AnmationDelItem.notdelitem,
    }: PropsType,
    ref
  ) => {
    const animationRef = useRef<HTMLDivElement>(null)
    const [animationType, setAnimationType] = useState<string | null>(null)
    const navigate = useNavigate()
    const [outElement, setOutElement] = useState(true)

    const clearanimation = () => {
      const divElement = animationRef.current
      divElement?.classList.remove(`${AnmationName.slideIn}-active`)
      divElement?.classList.remove(`${AnmationName.slideOut}-active`)
    }

    const animate = (animeType: AnmationName) => {
      setAnimationType(animeType)

      const divElement = animationRef.current
      divElement?.classList.remove(`${AnmationName.slideIn}-after`)
      divElement?.classList.remove(`${AnmationName.slideOut}-after`)
      divElement?.classList.add(`${animeType}-before`)

      requestAnimationFrame(() => {
        divElement?.classList.add(`${animeType}-active`)
        requestAnimationFrame(() => {
          divElement?.classList.remove(`${animeType}-before`)
        })
      })
    }

    useImperativeHandle(
      ref,
      () => {
        return {
          animate,
          clearanimation,
        }
      },
      []
    )

    const hendelAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      e.preventDefault()
      const divElement = e.currentTarget
      divElement?.classList.add(`${animationType}-after`)
      requestAnimationFrame(() => {
        divElement?.classList.remove(`${animationType}-active`)
        if (navigateForward)
          if (animationType === AnmationName.slideOut) navigate(navigateForward)
      })

      complete()
      if (
        animationType === AnmationName.slideOut &&
        deleteitem === AnmationDelItem.delitem
      )
        setOutElement(false)
    }

    if (!outElement) {
      return null
    }

    return (
      <div
        ref={animationRef}
        style={{ animationDuration: `${duration}s` }}
        onAnimationEnd={hendelAnimationEnd}
      >
        {children}
      </div>
    )
  }
)

export default AnimatabelItem
