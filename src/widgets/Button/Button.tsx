import { AppearanceButton, ButtonProps } from "./button.types"
import "./button.sass"

export const Button = (props: ButtonProps) => {
  const {
    appearance = AppearanceButton.default,
    children,
    className,
    ...othersProps
  } = props

  return (
    <button className={appearance + " " + className} {...othersProps}>
      {children}
    </button>
  )
}

export default Button
