import { useState } from "react"
import "./calcpage.sass"

interface IDataSet {
  value?: string
}
interface ITarget extends EventTarget {
  dataset?: IDataSet
}
const intCalc = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "0", "."]
const btnCalc = ["esc", "<", "+", "-", "*", "/", "="]

const CalcPage = () => {
  const [inputVal, setInputVal] = useState<string>("")

  const hendelValueClickInt = (e: React.MouseEvent<HTMLDivElement>) => {
    const target: ITarget = e.target
    if (target.dataset?.value) {
      console.log(target.dataset?.value)
      setInputVal(inputVal + target.dataset?.value)
    }
  }

  const hendelValueClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target: ITarget = e.target
    if (target.dataset?.value) {
      if (target.dataset?.value === "=") {
        try {
          const result: number = eval(inputVal)
          if (isNaN(result)) throw new Error()
          setInputVal(`${result}`)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
          setInputVal("ERROR")
        }
      } else if (target.dataset?.value === "<") {
        setInputVal(inputVal.slice(0, -1))
      } else if (target.dataset?.value === "esc") {
        setInputVal("")
      } else {
        setInputVal(inputVal + target.dataset?.value)
      }
    }
  }

  return (
    <>
      <div className="calcpage">
        <div className="calcbody">
          <div onClick={hendelValueClickInt} className="calcbox">
            <input
              //   onClick={() => {
              //     setInputVal("")
              //   }}
              readOnly
              className="calcbox__output"
              value={inputVal}
            />
            {/* <h2>{inputVal}</h2> */}
            {/* </input> */}

            {intCalc.map((i) => (
              <div data-value={i} className="calcbox__intbtn">
                {i}
              </div>
            ))}
          </div>
          <div onClick={hendelValueClick} className="calcbox">
            {btnCalc.map((i) => (
              <div data-value={i} className="calcbody__btn">
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CalcPage
