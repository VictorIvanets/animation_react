import { ReactNode } from "react"

export enum Power {
  hadrd = 1,
  easy,
  low,
}

export interface AnimatableElasticItemProps {
  children?: ReactNode
  valuePercent: number
  starting?: boolean
  outanime?: boolean
  className?: string
  power?: Power
  duration?: number
  style?: React.CSSProperties
}

export interface IAnime {
  timing: (a: number) => number
  draw: (a: number) => void
  duration: number
}

export interface IAnimatableElasticItem {
  startElastic: () => void
}
