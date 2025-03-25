import { useEffect, useRef } from "react"
import {
  Power,
  AnimatableElasticItemProps,
  IAnime,
} from "./AnimatableElasticItem.types"

const AnimatableElasticItem = ({
  children,
  valuePercent,
  className,
  starting = false,
  outanime = false,
  style,
  power = Power.hadrd,
  duration = 4000,
}: AnimatableElasticItemProps) => {
  const elasticRef = useRef<HTMLDivElement>(null)

  function animate({ timing, draw, duration }: IAnime) {
    const start = performance.now()

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1
      const progress = timing(timeFraction)
      draw(progress)
      if (timeFraction < 1) {
        requestAnimationFrame(animate)
      }
    })
  }

  function makeEaseOut(timing: (arg: number) => number) {
    return function (timeFraction: number) {
      return 1 - timing(1 - timeFraction)
    }
  }
  function makeEaseInOut(timing: (arg: number) => number) {
    return function (timeFraction: number) {
      if (timeFraction < 0.5) return timing(2 * timeFraction) / 2
      else return (2 - timing(2 * (1 - timeFraction))) / 2
    }
  }

  function elasticTiming(timeFraction: number): number {
    return (
      (Math.pow(2, 10 * (timeFraction - 1)) *
        Math.cos(((20 * Math.PI * 1.5) / 3) * timeFraction)) /
      power
    )
  }

  //   function circ(timeFraction: number): number {
  //     return 1 - Math.sin(Math.acos(timeFraction))
  //   }
  function quad(timeFraction: number): number {
    return Math.pow(timeFraction, 5)
  }

  const startElastic = () => {
    return animate({
      duration,
      timing: makeEaseOut(elasticTiming),
      draw(progress) {
        const divElement = elasticRef.current
        const plus = progress * valuePercent + "%"
        divElement!.style!.scale = plus
      },
    })
  }

  const outElastic = () => {
    return animate({
      duration: 1000,
      timing: makeEaseInOut(quad),
      draw(progress) {
        const divElement = elasticRef.current
        const valueStart = 1
        divElement!.style!.scale = (valueStart - progress) * 100 + "%"
      },
    })
  }

  useEffect(() => {
    if (starting) startElastic()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starting])

  useEffect(() => {
    if (outanime) outElastic()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outanime])

  return (
    <>
      <div
        style={{
          ...style,
          overflow: "hidden",
        }}
        ref={elasticRef}
        className={className}
        onAnimationEnd={(e) => console.log("END", e)}
      >
        {children}
      </div>
    </>
  )
}

export default AnimatableElasticItem
