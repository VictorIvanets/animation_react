import "./testpage.sass"
interface dropItemProps {
  item: string
}
const DropItem = ({ item }: dropItemProps) => {
  return (
    <>
      <div id={item} className="dropitem">
        <h4 id="drag">{item}</h4>
      </div>
    </>
  )
}

export default DropItem
