import { ReactNode } from "react"

export interface AnimationType {
  animate: (animationType: AnmationName) => void
  clearanimation: () => void
}

export type PropsType = {
  children: ReactNode
  navigateForward?: string
  duration?: string
  complete?: () => void
  deleteitem?: AnmationDelItem
}

export enum AnmationName {
  slideIn = "slide-in",
  slideOut = "slide-out",
}

export enum AnmationDelItem {
  delitem = "delitem",
  notdelitem = "notdelitem",
}
