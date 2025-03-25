import { useTheme } from "../../../Providers/Theme/useTheme"
import { imgdata } from "./dataimg"
import { ITargetDataSet } from "./event.types"
import "./imagepage.sass"
import { Novatrix, Lumiflex } from "uvcanvas"

const ImagePage = () => {
  const { theme } = useTheme()

  const bigImage = (e: MouseEvent, index: number) => {
    const target: ITargetDataSet = e.currentTarget!
    const mainbox = document.querySelector("#imagepage")!
    const image = document.querySelector(`#img${index}`)!
    const textitem = document.querySelector(`#txt${index}`)!
    requestAnimationFrame(() => {
      if (target.firstChild!.classList[1] === "bigimg") {
        const all = document.querySelectorAll(".imagepagebox__item")!
        const alltextitem = document.querySelectorAll(
          ".imagepagebox__textitem"
        )!
        all.forEach((a) => {
          a.classList = "imagepagebox__item"
        })
        alltextitem.forEach((t) => {
          t.classList = "imagepagebox__textitem"
        })
        mainbox.classList = "imagepage bg-0"
      } else {
        const activbox = document.querySelector(".bigimg")!
        if (activbox !== null) {
          activbox.classList.remove("bigimg")
        }
        const activtext = document.querySelector(".visibletext")!
        if (activtext !== null) {
          activtext.classList.remove("visibletext")
        }

        if (target.dataset!.imgindex === "img0")
          mainbox.classList = "imagepage bg-img0"
        else if (target.dataset!.imgindex === "img1")
          mainbox.classList = "imagepage bg-img1"
        else if (target.dataset!.imgindex === "img2")
          mainbox.classList = "imagepage bg-img2"
        else if (target.dataset!.imgindex === "img3")
          mainbox.classList = "imagepage bg-img3"
        else if (target.dataset!.imgindex === "img4")
          mainbox.classList = "imagepage bg-img4"
        image.classList = "imagepagebox__item bigimg"
        textitem.classList = "imagepagebox__textitem visibletext"
      }
    })
  }

  return (
    <>
      <div id={"imagepage"} className="imagepage">
        <div className="canvaswraper">
          {theme !== "dark" ? <Novatrix /> : <Lumiflex />}
        </div>

        <div className="imagepagewraper">
          {imgdata.map((i, index) => (
            <div
              key={index}
              data-imgindex={`img${index}`}
              className="imagepagebox"
              onClick={(e) => bigImage(e as unknown as MouseEvent, index)}
            >
              <div id={`img${index}`} className="imagepagebox__item">
                <div className="imagepagebox__itembox">
                  <img className="imagepagebox__itemimg" src={i.url} />
                  <div id={`txt${index}`} className="imagepagebox__textitem">
                    <h3 className="whitecolor">{i.name}</h3>
                    <p className="whitecolor">{i.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImagePage
