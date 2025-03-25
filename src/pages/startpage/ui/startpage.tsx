import { memo, useEffect, useState } from "react"
import "./startpage.sass"
import AnimatableElasticItem from "../../../components/animation/AnimatableElasticItem"
import { Power } from "../../../components/animation/AnimatableElasticItem.types"
import Button from "../../../widgets/Button/Button"
import { AppearanceButton } from "../../../widgets/Button/button.types"
import { useNavigate } from "react-router-dom"

export const AboutPage = memo(() => {
  const [testAnime, setTestAnime] = useState(false)
  const [mainOutAnime, setMainOutAnime] = useState(false)
  const [outAnime, setOutAnime] = useState(false)
  const [brrr, setBrrr] = useState(false)
  const navigete = useNavigate()

  useEffect(() => {
    let timebrr = 0
    if (testAnime) {
      timebrr = setTimeout(() => {
        setBrrr(true)
      }, 2000)
    }
    return () => clearTimeout(timebrr)
  }, [testAnime])

  const hendelOut = () => {
    setMainOutAnime(true)
    setTimeout(() => {
      navigete("/splashscreen")
    }, 1000)
  }

  const animationSpider = () => {
    if (!testAnime) {
      setTestAnime(true)
      setOutAnime(false)
    } else {
      setTestAnime(false)
      setOutAnime(true)
      setBrrr(false)
    }
  }

  return (
    <AnimatableElasticItem
      starting={true}
      className="startpage"
      valuePercent={100}
      outanime={mainOutAnime}
    >
      <div className="startpage">
        <div className="centercol mb-2 startpage__header">
          <div className="centerrow mb-2">
            <h1>Test elastic animation</h1>
            <Button
              className="ml-2"
              onClick={() => animationSpider()}
              appearance={AppearanceButton.small}
            >
              {!testAnime ? "START" : "OUT"}
            </Button>
            <Button
              className="ml-2 p-05"
              onClick={() => {
                hendelOut()
              }}
              appearance={AppearanceButton.default}
            >
              <h5>Exit</h5>
            </Button>
          </div>
          <h4>created using requestAnimationFrame & ref</h4>
        </div>

        <AnimatableElasticItem
          style={{ scale: "0%" }}
          power={Power.low}
          duration={2000}
          className="startpage__anime"
          valuePercent={100}
          starting={testAnime}
          outanime={outAnime}
        >
          <div className="startpage__anime__svgbox">
            <img className="startpage__anime__svg" src="./spider.svg" />
            {brrr && (
              <div>
                <AnimatableElasticItem
                  power={Power.low}
                  duration={2000}
                  className="startpage__anime__brrrr"
                  starting={true}
                  valuePercent={100}
                >
                  <h3> brrrr!!!</h3>
                </AnimatableElasticItem>
              </div>
            )}
          </div>
        </AnimatableElasticItem>
        {!testAnime && (
          <h1
            onClick={() => {
              setTestAnime(true)
              setOutAnime(false)
            }}
            className="startpage__letsgo"
          >
            LET'S GO!
          </h1>
        )}
      </div>
    </AnimatableElasticItem>
  )
})

export default AboutPage
