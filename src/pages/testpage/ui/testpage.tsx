import { useEffect, useState } from "react"
import "./testpage.sass"
import { Draggable, DropEventArgs, Droppable } from "@syncfusion/ej2-base"
import DropItem from "./dropItem"

export const TestPage = () => {
  const elemName = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6"]

  const [store, setStore] = useState<string[]>([])
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    value && setStore([...store, value])
  }, [value])

  useEffect(() => {
    elemName.forEach((i) => {
      let draggable: Draggable = new Draggable(document.getElementById(i)!, {
        clone: false,
      })
    })

    let droppable: Droppable = new Droppable(
      document.getElementById("droppable")!,
      {
        drop: (e: DropEventArgs) => {
          const elem = e.dragData?.helper?.querySelector("#drag")
          document.getElementById("droppable")?.classList.add("dragactive")
          setValue(elem?.textContent!) /// actoins
          elem?.parentElement?.remove()
          setTimeout(() => {
            document.getElementById("droppable")?.classList.remove("dragactive")
          }, 100)
        },
      }
    )
    let deleted: Droppable = new Droppable(
      document.getElementById("deleted")!,
      {
        drop: (e: DropEventArgs) => {
          const elem = e.dragData?.helper?.querySelector("#drag")
          document.getElementById("deleted")?.classList.add("dragactive")
          elem?.parentElement?.remove()
          setTimeout(() => {
            document.getElementById("deleted")?.classList.remove("dragactive")
          }, 200)
        },
      }
    )
  }, [])

  console.log(store)

  return (
    <div className="testpage">
      <div className="testpage__itemblock">
        {elemName.map((i, index) => (
          <DropItem key={index} item={i} />
        ))}
      </div>

      <div className="testpage__targetblock" id="droppable">
        <h3>STORE</h3>
        {store.map((str, index) => (
          <DropItem key={index} item={str} />
        ))}
      </div>
      <div className="testpage__deleteblock" id="deleted">
        <h3>DELL</h3>
      </div>
    </div>
  )
}

export default TestPage
