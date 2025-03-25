import { ButtonHTMLAttributes } from "react"

export enum AppearanceButton {
  default = "defaultbtn",
  big = "bigbtn",
  small = "smallbtn",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: AppearanceButton
  className?: string
}
