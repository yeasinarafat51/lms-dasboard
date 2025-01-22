import Card from "./Card"
import Cardpic from "./Cardpic"
import Cardtext from "./Cardtext"


const Cards = () => {
  return (
    <div className="grid grid-cols-3">
      <Card/>
      <Cardpic/>
      <Cardtext/>
    </div>
  )
}

export default Cards
